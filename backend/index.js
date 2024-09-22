const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express();
const bodyParser = require("body-parser")
const userRoute = require("./routes/userRoutes")
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use("/user",userRoute)
const db =mongoose.connect("mongodb://127.0.0.1:27017/jwtauth")

app.listen(3001,db,()=>{
    console.log("server on 3001")
    console.log("db connected")

})