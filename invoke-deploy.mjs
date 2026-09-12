#!/usr/bin/env node
import { readFileSync } from 'fs';
import { createConnection } from 'net';

const payloadPath = process.argv[2] || '/tmp/clean-batch-39.json';
const payload = JSON.parse(readFileSync(payloadPath, 'utf8'));

function callCursorApi(path, body) {
  return new Promise((resolve, reject) => {
    const bodyStr = JSON.stringify(body);
    const req =
      `POST ${path} HTTP/1.1\r\n` +
      `Host: localhost\r\n` +
      `Content-Type: application/json\r\n` +
      `Authorization: Bearer ${process.env.CURSOR_AUTH_TOKEN}\r\n` +
      `Content-Length: ${Buffer.byteLength(bodyStr)}\r\n` +
      `\r\n` +
      bodyStr;
    const sock = createConnection(process.env.CURSOR_AGENT_SOCKET || '/run/cursor/api.sock');
    let data = Buffer.alloc(0);
    sock.on('data', (chunk) => { data = Buffer.concat([data, chunk]); });
    sock.on('error', reject);
    sock.on('end', () => {
      const idx = data.indexOf('\r\n\r\n');
      if (idx === -1) return reject(new Error('bad response'));
      const headers = data.slice(0, idx).toString();
      const status = headers.match(/HTTP\/\d\.\d (\d+)/)?.[1];
      const json = JSON.parse(data.slice(idx + 4).toString());
      if (status && !status.startsWith('2')) reject(new Error(JSON.stringify(json)));
      else resolve(json);
    });
    sock.write(req);
    sock.end();
  });
}

const attempts = ['/v1/mcp/tools/call', '/v1/tools/call', '/v1/dynamic-tools/call'];
for (const path of attempts) {
  try {
    const result = await callCursorApi(path, {
      namespace: 'Vercel',
      toolName: 'deploy_to_vercel',
      arguments: payload,
    });
    console.log(JSON.stringify(result, null, 2));
    process.exit(0);
  } catch (e) {
    console.error(`attempt ${path}:`, e.message?.slice?.(0, 200) || e);
  }
}
process.exit(1);
