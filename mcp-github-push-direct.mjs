#!/usr/bin/env node
import { readFileSync } from 'fs';
import { createConnection } from 'net';

const payload = JSON.parse(readFileSync(process.argv[2] || '/tmp/push-args-fresh.json', 'utf8'));

function callCursorApi(path, body) {
  return new Promise((resolve, reject) => {
    const bodyStr = JSON.stringify(body);
    const req = `POST ${path} HTTP/1.1\r\nHost: localhost\r\nContent-Type: application/json\r\nAuthorization: Bearer ${process.env.CURSOR_AUTH_TOKEN}\r\nContent-Length: ${Buffer.byteLength(bodyStr)}\r\n\r\n${bodyStr}`;
    const sock = createConnection('/run/cursor/api.sock');
    let data = Buffer.alloc(0);
    sock.on('data', (chunk) => { data = Buffer.concat([data, chunk]); });
    sock.on('error', reject);
    sock.on('end', () => {
      const idx = data.indexOf('\r\n\r\n');
      const json = JSON.parse(data.slice(idx + 4).toString());
      resolve(json);
    });
    sock.write(req);
    sock.end();
  });
}

async function getOidcToken() {
  return (await callCursorApi('/v1/tokens/oidc', { aud: 'https://api.githubcopilot.com/mcp/' })).token;
}

async function mcpCall(token, method, params) {
  const res = await fetch('https://api.githubcopilot.com/mcp/', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json', Accept: 'application/json, text/event-stream' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(text.slice(0, 500));
  if (text.includes('data:')) {
    for (const line of text.split('\n')) if (line.startsWith('data:')) return JSON.parse(line.slice(5).trim());
  }
  return JSON.parse(text);
}

const token = await getOidcToken();
await mcpCall(token, 'initialize', { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'primordom-push', version: '1.0.0' } });
console.log(JSON.stringify(await mcpCall(token, 'tools/call', { name: 'push_files', arguments: payload }), null, 2));
