const mongoose= require("mongoose");

const TodoSchema = new mongoose.Schema({
    todo:String,
    studentId:String,


},{timestamps:true},
{
    collation:"Todo"
}
)
const Todo =mongoose.model("Todo",TodoSchema);
module.exports =Todo;