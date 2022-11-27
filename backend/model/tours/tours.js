const mongoose = require('mongoose');

const toursSchema = mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    location:{
        type: String,
        require:true
    }
})

const Tour = mongoose.model('Tour', toursSchema);

module.exports = Tour;