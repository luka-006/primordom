import { readFileSync } from 'fs';
import { createConnection } from 'net';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

function getOidcToken() {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ aud: 'https://mcp.vercel.com' });
    const req = `POST /v1/tokens/oidc HTTP/1.1\r\nHost: localhost\r\nContent-Type: application/json\r\nAuthorization: Bearer ${process.env.CURSOR_AUTH_TOKEN}\r\nContent-Length: ${Buffer.byteLength(body)}\r\n\r\n${body}`;
    const sock = createConnection('/run/cursor/api.sock');
    let data = Buffer.alloc(0);
    sock.on('data', (chunk) => { data = Buffer.concat([data, chunk]); });
    sock.on('error', reject);
    sock.on('end', () => {
      const idx = data.indexOf('\r\n\r\n');
      if (idx === -1) return reject(new Error('bad socket response'));
      resolve(JSON.parse(data.slice(idx + 4).toString()).token);
    });
    sock.write(req);
    sock.end();
  });
}

const payload = JSON.parse(readFileSync('/tmp/deploy-clean.json', 'utf8'));
const token = await getOidcToken();
const transport = new StreamableHTTPClientTransport(new URL('https://mcp.vercel.com'), { requestInit: { headers: { Authorization: `Bearer ${token}` } } });
const client = new Client({ name: 'deploy-script', version: '1.0.0' });
try {
  await client.connect(transport);
  const result = await client.callTool({ name: 'deploy_to_vercel', arguments: payload });
  console.log(JSON.stringify(result, null, 2));
} finally {
  await client.close();
}
