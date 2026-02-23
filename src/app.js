
const express = require('express');
const noteModel = require('./models/note.model');

// Create an instance of the Express application
const app = express();
app.use(express.json());//middleware to parse json data from body




//1.title //2.description
//curd operation
//post request
//get request
//patch request
//delete request


app.post('/notes', async (req, res) => {
    const data = req.body;//get data from body
   await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({
        message: "Note created successfully"
    })
})


app.get('/notes',async (req ,res)=>{
    const data = await noteModel.find()//[get all notes from db]
    //find {}, []
    //findOne {}, null
    res.status(200).json({
        message: "Notes fetched successfully",
        data: data
    })
})



app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message: "Note deleted successfully"    
    })

})


app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const description = req.body.description;
    await noteModel.findOneAndUpdate({_id: id}, 
       { description: description})
    res.status(200).json({
        message: "Note updated successfully"
    })
})
module.exports = app;