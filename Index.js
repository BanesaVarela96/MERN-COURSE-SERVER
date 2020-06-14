const express= require("express")
const server = express ();
const mongoose = require ("mongoose")
const api_user = require ("./Routes/Api/user") 
const key_mongodb= require ("./config/mongodb_key").key


mongoose.connect(key_mongodb, () => { }, { useNewUrlParser: true,  useUnifiedTopology:true })
.then (() => console.log("mongo is conected"))
    .catch(err => {
        console.log(err);
    });

server.use(express.json())
server.use(api_user)

server.listen(5000,(err)=>{
    console.log("Express server running port 5000")
})