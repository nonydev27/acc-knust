// Load Express, the library that handles web requests
const express = require('express');

// Create the application object
const app = express();

// A fixed port for now (Assignment 2 moves this to an env variable)
const PORT = 3000;

// A route: when someone sends GET to "/", run this function.
// req = incoming request, res = the response we send back.
app.get('/', (req, res) => {
  res.json({
    name: 'Basuglo Ray-Divine',
    knustIndex: '3131225',
    year: 'Year 2',
    status: 'ACC Backend Ready'
  });
});

// Start listening for requests
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
