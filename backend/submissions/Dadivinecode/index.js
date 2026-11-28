// Must be the FIRSST line: loads .env values into process.env
require('dotenv').config();

// Load Express, the library that handles web requests
const express = require('express');

// Create the application object
const app = express();

// Read from environment; fall back to 3000 if PORT  is missing

const PORT = process.env.PORT || 3000;
const CLUB_SECRET_KEY = process.env.CLUB_SECRET_KEY;


// Fail loudly if the secret is missing, so config problems show up early
if (!CLUB_SECRET_KEY){
  console.warn('Warning: CLUB_SECRET_KEY is not set. Check your .env file.');
}

app.get('/', (req, res) => {
  res.json({
    name: 'Basuglo Ray-Divine',
    knustIndex: '3131225',
    year: 'Year 2',
    status: 'ACC Backend Ready'
    // NOTE: please we deliberately do NOT return the secret key in the response
  });
});

// Start listening for requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
