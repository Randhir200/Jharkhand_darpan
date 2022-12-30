const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true, 'A tour must have a name'],
        unique:true,
        trim:true
    },
    duration:{
        type:Number
    },
    rating:{
        type:Number,
        default:4.5
    },
    ratingsAverage:{
        type:Number,
        default:4.5
    },
    ratingsQuantity:{
        type:Number,
        default:0
    },
    price:{
      type: Number,
    },
    location:{
        type: String,
    },
    summery:{
        type:String,
        trim:true
    },
    description:{
        type:Number,
        trim:true
    },
    imageCover:{
        type:String,
    },
    images:[String],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    startDates:[Date]
})

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;