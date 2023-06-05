const mongoose= require("mongoose");

const bookSchema = new mongoose.Schema({
    BookName:String,
    BookAuthor:String,
    BookYear:String,
    BookDepratment:String


},{timestamps:true},
{
    collation:"Books"
}
)
const Book =mongoose.model("Books",bookSchema);
module.exports =Book;