import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

http.createServer((req, res) => {
  try {
    // Strip query string and trailing slashes
    let urlPath = req.url.split('?')[0].replace(/\/+$/, '') || '/index.html';

    let filePath = path.join(__dirname, urlPath);
    let st = null;
    try { st = fs.statSync(filePath); } catch (_) { }

    // If it's a directory, look for index.html inside it
    if (st && st.isDirectory()) {
      const idx = path.join(filePath, 'index.html');
      try {
        const s2 = fs.statSync(idx);
        if (s2.isFile()) { filePath = idx; st = s2; }
      } catch (_) { }
    }

    // If still not a file, fall back to root index.html (SPA-style)
    if (!st || !st.isFile()) {
      filePath = path.join(__dirname, 'index.html');
      try { st = fs.statSync(filePath); } catch (_) { st = null; }
    }

    if (st && st.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
}).listen(process.env.PORT || 8080, () => {
  console.log('Static server listening on port', process.env.PORT || 8080);
});
