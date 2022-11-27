const mongoose = require('mongoose');
require('dotenv').config()

const connection = async()=>{
     return await mongoose.connect(process.env.MONGODB_URL)
}

module.exports = {connection}