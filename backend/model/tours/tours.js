const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    name:{
        type: String,
 
    },
    rating:{
        type:Number,
        default:4.5
    },
    price:{
      type: Number,
    },
    location:{
        type: String,
    }
})

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;