import express, { application } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from './routes/posts.js';
// const express = require ('express');
const app=express()

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes);
const PORT=process.env.PORT ||5000;

app.listen(PORT, () => console.log('Server started'));

mongoose.connect('mongodb://127.0.0.1:27017/firstone',
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
)
.then(() => console.log('Database connected'))
.catch((error)=>console.log('DB errr', error.message))
// mongoose.set('useFindAndModify', false);
