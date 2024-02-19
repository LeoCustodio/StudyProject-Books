let mongoose = require('mongoose')

let bookSchema = new mongoose.Schema({
    tittle:{
        type: String,
        require: true
    },
    author:{
        type: String,
        require:true
    },
    numberPages:{
        type: Number,
        require:false
    },
    publisher:{
        type: String,
        require: false
    }
})

module.exports = mongoose.model('Books', bookSchema)