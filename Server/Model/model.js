const mongoose= require("mongoose");






const MemberSchema = new mongoose.Schema({
  Email:String,
});


const MemberSchemaa = new mongoose.Schema({
  Email:String,
  Payment: String, 
  
});

const RequestSchema = new mongoose.Schema({
  Email:String,
  Reason:String,
  Evidence: String,
  Payment: String, 
  Date:String,
  Edirr:String,
  

});


const MonthlyPayment = new mongoose.Schema({
  Email:String,
  Date:String,
  Amount:String,
  

});

const memberdb =mongoose.model("member", MemberSchema);
const EdirrSchema = new mongoose.Schema(
  {     visiblty:String,
        NameOfeDirr:String, 
        Location:String,
        eDirrType:String,
        Amount:String,
        Rqdate:String,
        PaymentDuration:String,
        PaymentDay:String,
        Description:String,
        Creator:String,
        Member:[MemberSchema],
        Members:[MemberSchemaa],
        Request:[RequestSchema],
        MonthlyPayment:[MonthlyPayment],
        CurrentPaymentDay:String

      },{timestamps:true},


  
  {
      collection: "Edirs",

  }

);

const Edirs =mongoose.model("Edirs", EdirrSchema);


module.exports = Edirs;
// ,Admin;
// Edirs,UserInfo;