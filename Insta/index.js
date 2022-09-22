const express = require("express")
const  connection  = require("./Store/db")
const app =express()
const authRouter =require("./Routes/Auth") 
const userRouter =require("./Routes/user") 
const cors = require("cors")
app.use("./static",express.static("./uploads"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use("/auth",authRouter)
app.use("/profile",userRouter)


app.listen(8080,async()=>{
    try{
        await connection
        console.log(" connection to db")
    }catch{
console.log("error in connect to db")
    }
  
    console.log("server will 8080 port ")
})