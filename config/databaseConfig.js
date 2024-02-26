const mongoose = require('mongoose');
const event_emitter = require("events");
const { DATABASE_URL } = require('./serverConfig');
const db_event_emitter = new event_emitter();

const make_connection =  async()=>{
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Connection to database is successful");
        db_event_emitter.emit("connection");
        return true;
      } 
      catch (err) { 
        console.log("Connection Error", err.message); 
        mongoose.connection.close();
        
        process.exit(0) 
      }
}

make_connection();