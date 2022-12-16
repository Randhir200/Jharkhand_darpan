const { connection } = require('./config/db');
const express = require('express');
const Tour = require('./model/tours/tours');
const app = express();
const Joi = require('joi');

const schema = Joi.object({
  metadata: Joi.object().keys({
    name: Joi.string().pattern(new RegExp(`^[a-zA-Z0-9./ _à()_\-]{1,1000}$`)).message('failed')
        .required()
  }),
});
app.use(express.json())
app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});
const testTour = new Tour({
  name:'rani fual',
  location:'khunti',
  price:1500
})

app.post('/add', async (req, res) => {
   let name = req.body.schema;
   try {
    const value = await schema.validateAsync(req.body);
    res.status(200).send(value);
}
catch (err) { res.status(200).send(`Success ${err}`) }
   
})



const PORT = process.env.PORT || 3030;
app.listen(PORT, async () => {
  await connection();
  console.log(`listening on port ${PORT}`);
});
