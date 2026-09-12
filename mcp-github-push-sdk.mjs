#!/usr/bin/env node
import { readFileSync } from 'fs';
import { createConnection } from 'net';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

function getOidcToken(aud) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ aud });
    const req = `POST /v1/tokens/oidc HTTP/1.1\r\nHost: localhost\r\nContent-Type: application/json\r\nAuthorization: Bearer ${process.env.CURSOR_AUTH_TOKEN}\r\nContent-Length: ${Buffer.byteLength(body)}\r\n\r\n${body}`;
    const sock = createConnection('/run/cursor/api.sock');
    let data = Buffer.alloc(0);
    sock.on('data', (chunk) => { data = Buffer.concat([data, chunk]); });
    sock.on('error', reject);
    sock.on('end', () => resolve(JSON.parse(data.slice(data.indexOf('\r\n\r\n') + 4).toString()).token));
    sock.write(req);
    sock.end();
  });
}

const payload = JSON.parse(readFileSync(process.argv[2] || '/tmp/push-args-fresh.json', 'utf8'));
const token = await getOidcToken('https://api.githubcopilot.com/mcp/');
const transport = new StreamableHTTPClientTransport(new URL('https://api.githubcopilot.com/mcp/'), { requestInit: { headers: { Authorization: `Bearer ${token}` } } });
const client = new Client({ name: 'github-push', version: '1.0.0' });
await client.connect(transport);
console.log(JSON.stringify(await client.callTool({ name: 'push_files', arguments: payload }), null, 2));
await client.close();
