require('dotenv').config()
const app = express();
const { connection } = require('./config/db');
const express = require('express');
const routes = require('./routes/index');
const helemt = require('helmet');

app.use(helemt());
app.use(express.json());
app.use('/', routes)

const PORT = process.env.PORT || 3030;
app.listen(PORT, async () => {
  await connection();
  console.log(`listening on port ${PORT}`);
});
