//....server side
const express = require("express");
const fun = require('./port4000_2')
let server = express();

server.use(bodyParser.urlencoded({ extended: true}))
const bodyParser = require("body-parser");
const read = require("./port4000_1");

server.use(bodyParser.json());

server.get("/hello",(req,res)=>{
     res.send(result)
 })

server.listen(3000,()=>{
     console.log("server 3000 running");
 })
const result=(fun(read));