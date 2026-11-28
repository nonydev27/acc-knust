const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath) && typeof process.loadEnvFile === 'function') {
  process.loadEnvFile(envPath);
}

const PORT = Number(process.env.PORT) || 3000;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY || '';

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        name: 'Sanyenni Louis Aparkwon',
        index: '6182324',
        year: 'Level 300',
        status: 'ACC Backend Ready',
        port: PORT,
        secretConfigured: Boolean(CLUB_SECRET_KEY),
      })
    );
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not Found' }));
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = server;
