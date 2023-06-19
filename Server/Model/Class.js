const mongoose= require("mongoose");
const MemberScehma = new mongoose.Schema(
    {
      StudentId:String,
      StudentName:String,
      StudentDept:String
    },{timestamps:true},
  )


  const MaterialScehma = new mongoose.Schema(
    {
      ClassId:String,
      Title:String,
      File:String
    },{timestamps:true},
  )

const ClassSchema = new mongoose.Schema({
    
    CourseId:String,
    CourseName:String,
    Ects:String,
    CreaditHour:String,
    Member:[MemberScehma],
    Material:[MaterialScehma],
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