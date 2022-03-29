//....clint side
const express = require("express");
const fetch = require("node-fetch");
let client = express();

client.use(bodyParser.urlencoded({ extended: true}))
let bodyParser = require("body-parser");

let api = "http://localhost:3000/hello";

client.use(bodyParser.json());


fetch(api).then((response) => {
  if(response.status === 200)
  { 
   return response.json();
  }
  else
  {
    console.log("worng port");
  }
   })
   .then((data)=>{
    console.log(data);
   })

client.listen(4000, () => {
  console.log("port 4000 running");
});

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());

// app.get('/hello',(req,res)=>{
//     res.send('hello :'+req.query.name);
// });


// app.post('/hello',(req,res)=>{
//     res.json({
//         name : 'hello '+req.body.name
//     });
// });


// app.post('/hello1',(req,res)=>{
//     console.log('hello ');
// });

// app.listen(4000,() => {
//     console.log('srever started on 4000');
// })


