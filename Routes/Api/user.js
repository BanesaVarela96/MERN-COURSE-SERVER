const express = require("express")
const routes = express.Router();
const userModel = require ("../../models/User");



routes.get("/user", (req, res)=>{    
    userModel
    .find()
    .then((response) =>res.json(response))
    .catch ((err) => console.log(err));
    
})

module.exports= routes;