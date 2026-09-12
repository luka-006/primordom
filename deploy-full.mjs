import { readFileSync } from 'fs';
import { createConnection } from 'net';

function getOidcToken(aud = 'https://mcp.vercel.com') {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ aud });
    const req =
      `POST /v1/tokens/oidc HTTP/1.1\r\n` +
      `Host: localhost\r\n` +
      `Content-Type: application/json\r\n` +
      `Authorization: Bearer ${process.env.CURSOR_AUTH_TOKEN}\r\n` +
      `Content-Length: ${Buffer.byteLength(body)}\r\n` +
      `\r\n` +
      body;
    const sock = createConnection('/run/cursor/api.sock');
    let data = '';
    sock.on('data', (chunk) => { data += chunk.toString(); });
    sock.on('error', reject);
    sock.on('end', () => {
      const idx = data.indexOf('\r\n\r\n');
      if (idx === -1) return reject(new Error('bad socket response'));
      resolve(JSON.parse(data.slice(idx + 4)).token);
    });
    sock.write(req);
    sock.end();
  });
}

const payload = JSON.parse(readFileSync('/tmp/prog-39.json', 'utf8'));
const token = await getOidcToken('https://mcp.vercel.com');

const res = await fetch('https://mcp.vercel.com', {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json, text/event-stream',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    jsonrpc: '2.0',
    id: 1,
    method: 'tools/call',
    params: { name: 'deploy_to_vercel', arguments: payload },
  }),
});

console.log('status', res.status);
console.log(await res.text());
