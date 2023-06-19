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
      Id:{ type: String,
        unique: true},
      fullName:String,
      phoneNumber: String,
      gender:String,
      department:String,
      email:{ type: String,
        unique: true},
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