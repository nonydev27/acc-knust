import express from 'express';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: 'Abrusu Sampson Junior',
    year: 2,
    status: 'ACC Backend Ready',
  });
});

app.listen(3000, () => console.log(`Running on port 3000`));
