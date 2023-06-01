const mongoose= require("mongoose");

const AdminNotificationScehma = new mongoose.Schema(
    {
  
      text:String,
      name:String,
      Creator:String,
      edirr:String,
    }
  )
  const ContactUs = new mongoose.Schema(
    {  
  
      Email:String,
      Subject:String,
      Message:String,
      Date:String,
    }
  )
  
  const ReportScehma = new mongoose.Schema(
    {
      EdirName:String,
      EdirrId:String,
      UserName:String,
      Report:String,
      Date:String,
      Status:{
        type:String,
        default:"new"
      },
    }
  )

const AdminScehma = new mongoose.Schema(
    {
      
      Notification:[AdminNotificationScehma],
      Report:[ReportScehma],
      Contact:[ContactUs]
      
    },
    {
        collection: "Admin",
  
    }
  
  );
  const Admin = mongoose.model("Admin", AdminScehma);
  module.exports = Admin;