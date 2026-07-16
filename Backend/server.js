require("dotenv").config()
const app = require("./src/app.js");
const ConnectingToDatabase = require("./src/config/database.js");
const dns = require("dns");
dns.setServers(["8.8.8.8","8.8.4.4"]);

ConnectingToDatabase();    

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Live on ${process.env.PORT} port`);
})

//main function of this file is to start the sercer and establish connection with data basE