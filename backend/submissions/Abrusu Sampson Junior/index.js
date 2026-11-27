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

app.post('/register', (req, res) => {
  const { name, email } = req.body;
  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ error: 'name and email are required' });
  }
  res.status(201).json({ message: 'Registered', name, email });
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
