import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import  Pusher from "pusher";
import cors from 'cors'

const app=express();
const port = process.env.port || 9000

const pusher = new Pusher({
    appId: "1217146",
    key: "81e0491a168617f6f216",
    secret: "4d102dfcb8c80f9e512c",
    cluster: "ap2",
    useTLS: true
  });

  app.use(cors())
  
const connection_url=`mongodb+srv://Huzaifa:wIB1aqsU7M7NNtxD@cluster0.dqjdi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;
db.once("open",()=>{
    console.log("DB connected");

    const msgCollection=db.collection("messagecontents");
    const changeStream=msgCollection.watch();
    changeStream.on("change",change=>{
        if(change.operationType==='insert'){
            const messageDetails=change.fullDocument
            console.log(messageDetails)
            pusher.trigger("message", "inserted",{
                name:messageDetails.name,
                message:messageDetails.message
            })
        }
        else{
            console.log("Error Trigginf Pusher")
        }
    })
})

//middlewares
app.use(express.json())

app.get("/",(req,res)=>res.status(200).send("hello world"));

app.get("/messages/sync",(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(data)
        }
        else{
            res.status(200).send(data)
        }
    })
})
app.post("/messages/new",(req,res)=>{
    const dbMessage=req.body;
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(data)
        }
        else{
            res.status(201).send(data)
        }
    })
})

//listen
app.listen(port,()=>console.log(`listning on local host :${port}`))