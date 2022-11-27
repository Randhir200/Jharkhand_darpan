const { connection } = require('./config/db');
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});
const PORT = process.env.PORT || 3030;
app.listen(PORT, async () => {
  await connection();
  console.log(`listening on port ${PORT}`);
});
