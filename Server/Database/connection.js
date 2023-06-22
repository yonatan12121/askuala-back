const mongoose = require("mongoose");


const connectDB = async () => {
   
 const con = await mongoose.connect(process.env.MONGO_URL|| 
  'mongodb+srv://root:root@cluster0.nwowzfp.mongodb.net/Askuala?retryWrites=true&w=majority'
  , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));
}
  module.exports = connectDB 



  mongoose.set('strictQuery', true);
  // const mongoose = require('mongoose');


module.exports = connectDB