const mongoose = require('mongoose');
const ENV = require('./env');


const connectdb = async () =>{
    try {
       const conn =  await mongoose.connect(ENV.DB_URL)
       console.log("connected to DB",conn.connection.host);
       
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}

module.exports = connectdb;