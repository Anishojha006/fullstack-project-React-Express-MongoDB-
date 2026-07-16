const express = require("express");
const app = express(); // creating instance of server
const notesModel = require("./models/notes.model.js");
app.use(express.json()); // middleware used to get requet from body to the server in an readable format to the server

// now Creating API for notes

/* POST API - /api/notes  
  work of  this API is to create notes and sacve data in mongoDB database
**/

app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;

  const note = await notesModel.create({
    title,
    description
  }).then((notes) => {
    res.status(201).json({
      message: "Notes created sucessfully",
      notes
    })
  })
})


/* GET API - /api/notes fetch notes data fromn mongodb and send them in the form of response**/

app.get("/api/notes", async (req, res) => {
  const notes = await notesModel.find();
  res.status(200).json({
    message: "   Notes fetched successfully",
    notes
  })
})

// now deleting an note 
//Delete notes from the id from req.params 
app.delete("/api/notes/:id", async (req, res) => {

  await notesModel.findByIdAndDelete(req.params.id)
  res.status(200).json({
    message: "Note deleted successfully.mon"
  })
})

// now using patch to update the description of the note by id
//re.body will only have description
app.patch("/api/notes/:id",async (req,res)=>{
   const id  = req.params.id;
   const {description} = req.body;
   console.log(description)
  await notesModel.findByIdAndUpdate(id,{description});
  res.status(200).json({
    message:"Updated Sucessfully!"
  })
})
module.exports = app

// creating server 