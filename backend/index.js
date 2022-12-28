const { connection } = require('./config/db');
const express = require('express');
const app = express();
const routes = require('./routes/index');
require('dotenv').config()
app.use(express.json());

app.use('/', routes);

const PORT = process.env.PORT || 3030;
app.listen(PORT, async () => {
  await connection();
  console.log(`listening on port ${PORT}`);
});
