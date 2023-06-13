const mongoose= require("mongoose");

const CourseSchema = new mongoose.Schema({
    
    CourseId:String,
    CourseName:String,
    Ects:String,
    CreaditHour:String,
    lectureID:String,
    courseDept:String,
    CourseCreator:String,
},{timestamps:true},
{
    collation:"Course"
}
)
const Courses =mongoose.model("Course",CourseSchema);
module.exports =Courses;