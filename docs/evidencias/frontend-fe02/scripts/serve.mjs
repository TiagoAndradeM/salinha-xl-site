import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const base = resolve('site');
const mime = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png'};
const port = 4173;
const server = http.createServer(async (req, res) => {
  const pathname = new URL(req.url ?? '/', 'http://localhost').pathname;
  let file;
  try {
    file = resolve(base, '.' + decodeURIComponent(pathname === '/' ? '/index.html' : pathname));
    if (file !== base && !file.startsWith(base + sep)) { res.writeHead(403); res.end('Forbidden'); return; }
    const data = await readFile(file);
    res.writeHead(200, {'Content-Type': mime[extname(file)] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff'});
    res.end(data);
  } catch { res.writeHead(404); res.end('Not found'); }
});
server.listen(port, '127.0.0.1', () => console.log(`Site disponível em http://localhost:${port}`));
