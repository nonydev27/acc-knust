const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath) && typeof process.loadEnvFile === 'function') {
  process.loadEnvFile(envPath);
}

const PORT = Number(process.env.PORT) || 3000;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY || '';

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload));
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
    });
    req.on('end', () => {
      if (!raw.trim()) {
        resolve({});
        return;
      }
      try {
        const parsed = JSON.parse(raw);
        if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
          reject(new Error('JSON body must be an object'));
          return;
        }
        resolve(parsed);
      } catch {
        reject(new Error('Invalid JSON payload'));
      }
    });
    req.on('error', reject);
  });
}

function validateMemberRegistration(payload) {
  const errors = [];
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';

  if (!name) {
    errors.push('name is required and must be a non-empty string');
  }
  if (!email) {
    errors.push('email is required and must be a non-empty string');
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }
  return { valid: true, data: { name, email } };
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    sendJson(res, 200, {
      name: 'Sanyenni Louis Aparkwon',
      index: '6182324',
      year: 'Level 300',
      status: 'ACC Backend Ready',
      port: PORT,
      secretConfigured: Boolean(CLUB_SECRET_KEY),
    });
    return;
  }

  if (req.method === 'POST' && req.url === '/register') {
    let body;
    try {
      body = await parseJsonBody(req);
    } catch (err) {
      sendJson(res, 400, { error: err.message });
      return;
    }

    const result = validateMemberRegistration(body);
    if (!result.valid) {
      sendJson(res, 400, {
        error: 'Validation failed',
        details: result.errors,
      });
      return;
    }

    sendJson(res, 201, {
      message: 'Member registered successfully',
      member: result.data,
    });
    return;
  }

  sendJson(res, 404, { error: 'Not Found' });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = { server, validateMemberRegistration };
