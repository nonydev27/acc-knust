// Must be the FIRSST line: loads .env values into process.env
require('dotenv').config();

// Load Express, the library that handles web requests  and create an object.
const express = require('express');
const app = express();

// Middleware: lets Express read JSON sent in a request body
app.use(express.json());


// Read from environment; fall back to 3000 if PORT  is missing

const PORT = process.env.PORT || 3000;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY;


// Fail loudly if the secret is missing, so config problems show up early
if (!CLUB_SECRET_KEY) {
  console.warn('Warning: CLUB_SECRET_KEY is not set. Check your .env file.');
}

// Existing route 

app.get('/', (req, res) => {
  res.json({
    name: 'Basuglo Ray-Divine',
    knustIndex: '3131225',
    year: 'Year 2',
    status: 'ACC Backend Ready'
    // NOTE: please we deliberately do NOT return the secret key in the response
  });
});


// POST /register: accepts member registration data
app.post('/register', (req, res) => {
  // "|| {}" prevents a crash if no body was sent at all
  const { name, email } = req.body || {};

  const errors = [];

  // Must be a string AND not empty after trimming spaces
  if (typeof name !== 'string' || name.trim() === '') {
    errors.push('name is required and cannot be empty');
  }
  if (typeof email !== 'string' || email.trim() === '') {
    errors.push('email is required and cannot be empty');
  }

  // If anything failed, respond 400 and stop here
  if (errors.length > 0){
    return res.status(400).json({ success: false, errors });
  }

  // All good: 201 = resource created 
  return res.status(201).json({
    success: true,
    message: 'Member registered successfully',
    member: { name: name.trim(), email: email.trim() }
  });
});


// Start listening for requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
