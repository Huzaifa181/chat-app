import express from 'express'
import mongoose from 'mongoose'

const app=express();
const port = process.env.port || 9000

const connection_url=`mongodb+srv://Huzaifa:AB2xBprKsCDvYOL1@cluster0.dqjdi.mongodb.net/whatsapp-clone?retryWrites=true&w=majority`

mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.get("/",(req,res)=>res.status(200).send("hello world"));

//listen
app.listen(port,()=>console.log(`listning on local host :${port}`))