// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js"


dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    const port=process.env.PORT || 8000
    app.on("error",(error)=>{
            console.log("ERROR ",error);
            process.exit(1)
        })
    app.listen(port,()=>{
        console.log(`Server is running at port: ${port}`);
        
    })
})
.catch((error)=>{
    console.log("MONGODB Connection failed !!! ",error);
    process.exit(1)
})

/*
import express from "express"
const app=express()
;(async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    }catch(error){
        console.error("ERROR: ",error)
        throw error
    }
})() 
*/