const mongoose = require("mongoose");
// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

const googlebooks = new Schema({
    title:{type: String, required: true},
    authors: [{type: String, required: true}],
    description:{type: String, required: true},
    image: {type: String},
    link: String
}); 


// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model("Book", googlebooks);
// Export the Book model
module.exports = Book;
