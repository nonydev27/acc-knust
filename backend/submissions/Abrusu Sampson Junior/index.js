import 'dotenv/config';
import express from 'express';
const app = express();

const PORT = process.env.PORT ?? 3000;
const SECRET = process.env.CLUB_SECRET_KEY;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: 'Abrusu Sampson Junior',
    year: 2,
    status: 'ACC Backend Ready',
  });
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
