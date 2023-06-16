const express = require('express');
const dotenv =require('dotenv');
const app = express();
const bodyparser = require('body-parser');
const route = require("./Server/Router/router");

const cors = require("cors");
app.use(cors());
app.use(bodyparser.urlencoded({ extended : true}))

const connectDB = require('./server/database/connection');
  
dotenv.config({ path: ".env" });
const PORT = process.env.PORT||8080
connectDB();
app.use(express.json())
app.get('/',(req,res)=>{
res.render('index');
})


app.use('/', route);
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});
