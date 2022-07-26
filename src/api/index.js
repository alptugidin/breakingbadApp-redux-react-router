import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/characters', (req, res) => {
  res.send('api ok');
});

app.listen(3001, () => {
  console.log('SW START');
});
