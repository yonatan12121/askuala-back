const mongoose= require("mongoose");

const TodoSchema = new mongoose.Schema({
    inputTodo:String,


},{timestamps:true},
{
    collation:"Todo"
}
)
const Todo =mongoose.model("Todo",TodoSchema);
module.exports =Todo;