const mongoose= require("mongoose");

const AnswerScehma = new mongoose.Schema(
    {
      Answer:String,
      Name:String,
      Count:String,
      QuestionId:String,
      
    },{timestamps:true},
  )
  const QuestionScehma = new mongoose.Schema(
    {   

        Question:String,
        Answer:[AnswerScehma],
        QuestionAsker:String,
        Department:String,
      
    },{timestamps:true},
    {
        collection: "Question",

    }

);
const Questions = mongoose.model("Question", QuestionScehma);
module.exports = Questions;