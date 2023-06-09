const mongoose= require("mongoose");

const NotificationScehma = new mongoose.Schema(
    {
      text:String,
      name:String,
      edirr:String,
      type:String,
      Payment: String, 
      Date:String,
      
    }
  )
  const UserDetailsScehma = new mongoose.Schema(
    {
      Id:String,
      fullName: String,
      phoneNumber: String,
      gender:String,
      department:String,
      email: String,
      password: String,
      cpassword: String,
      Notification:[NotificationScehma],
      role: String,
      verified:Boolean,
      
    },
    {
        collection: "Users",

    }

);
const User = mongoose.model("Users", UserDetailsScehma);
module.exports = User;