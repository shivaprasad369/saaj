import express from "express";
// import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
// import connectDb from './mogodb/connect.js';
import mongoose from 'mongoose';
// import PostRoutes from '../routes/postRoutes.js';
// import DalleRoutes from '../routes/dalle.js';
dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}));


// app.use('/api/v1/post',PostRoutes)
// app.use('/api/v1/dalle',DalleRoutes)


app.get('/',(req,res)=>{
    res.send('Hello DALL-E')
})

const startServer=()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL).then(()=>console.log("db connected"))
        // connectDb(process.env.MONGODB_URL)
        app.listen(8000,()=>console.log('server is running'))
        
    } catch (error) {
        console.log(error)
    }
}
startServer()
