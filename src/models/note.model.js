//create scema for note
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({//define the fields for note
    title: String,
    description: String
    //age: Number,
    //dob: Date


})


const noteModel = mongoose.model('Note', noteSchema);//any operation crud operation



module.exports = noteModel;