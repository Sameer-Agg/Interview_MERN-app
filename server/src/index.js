const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const ENV = require('./lib/env.js');
const connectdb = require('./lib/db.js');
app.use(cors());




app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.get('/health',(req,res)=>{
    res.status(201).json({message:'success from api'})
})

app.get('/books',(req,res)=>{
    res.status(201).json({message:'books endpoint'})
})
 


if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../../client/dist")));
    app.get('/{*any}',(req,res)=>{
        res.sendFile(path.join(__dirname,"../../client/dist/index.html"))
    })
}

// if (ENV.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../../client/dist")));

//   app.use((req, res) => {
//     res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
//   });
// }





const startServer = async ()=>{
    try {
        await connectdb();
        app.listen(ENV.PORT,()=>{
            console.log("server started at ",ENV.PORT);    
        })} catch (error) {
            console.log(error);
            
        } 
    }
 

    startServer();  