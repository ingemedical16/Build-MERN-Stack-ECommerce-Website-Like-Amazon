import express from 'express';
import data from './data/data.js';
const app = express();

app.get('/app/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
