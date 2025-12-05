const express = require('express');
const app = express();
const cors = require('cors');
const ENV = require('./lib/env.js');
app.use(cors());




app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const port = process.env.PORT || 3000
app.get('/health',(req,res)=>{
    res.status(201).json({message:'success from api'})
})

app.listen(ENV.PORT,()=>{
    console.log("server started at ",ENV.PORT);
    
})