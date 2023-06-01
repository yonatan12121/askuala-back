const mongoose= require("mongoose");

const UserInfoSchema = new mongoose.Schema(
    {
          email:String,
          firstName:String,
          lastName:String,
          dateOfBirth:String,
          nation:String,
          gender:String,
          myFile:String,
          city:String,
          subCity:String,
          wereda:String,
          kebele:String,
          houseNumber:String,
          phoneNumber:String,
          level:String,
          position:String,
          institution:String,
          place:String,
          certificate:String,
          workId:String,
          certificateres:String,
          experienceres:String,
          title:String,
          partner:String,
          parent_po_no:String,
          parent_address:String,
          childName:String,
          childGender:String,
          childAge:String,
          emergency_contact:String,
          relationship:String,
          EmergencyPhoneNo:String,
          Emergencyaddress:String,
  
  
  
  
     
      
    },
    {
        collection: "userInformation",
  
    }
  
  );
  
  const UserInfo =mongoose.model("userInformation", UserInfoSchema);
 module.exports = UserInfo;