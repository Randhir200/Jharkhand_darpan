require('dotenv').config()
const express = require('express');
const app = express();
const { connection } = require('./config/db');
const routes = require('./routes/index');
const helemt = require('helmet');
const joi = require('joi');
const chai = require('chai');
var assert = require('assert');
const { expect, describe } = chai;
app.use(helemt());
app.use(express.json());
app.use('/', routes)

const add = (a,b)=>{
  return a+b
}

chai.should();

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, async () => {
  await connection();
  console.log(`listening on port ${PORT}`);
});
