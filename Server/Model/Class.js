const mongoose= require("mongoose");

const ClassSchema = new mongoose.Schema({
    
    CourseId:String,
    CourseName:String,
    Ects:String,
    CreaditHour:String,
    lectureID:String,
    courseDept:String,
    StartDay:String,
    EndDay:String,
    Description:String
},{timestamps:true},
{
    collation:"Course"
}
)
const Class =mongoose.model("Class",ClassSchema);
module.exports =Class;