const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const   notesModel = mongoose.model("Notes",noteSchema); //Notes is the collection wher notes will be stored

module.exports = notesModel;