// GET ===requests are used to send only limited amount of data because data is sent into header.
// POST ===requests are used to send large amount of data because data is sent in the body.
// put ===is data upload.
//request===request is the HTTP request.
//response===response object that we'll send to the client
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json());

app.get('/hello',(req,res)=>{
    res.json({
        name :'hello '+req.query.name,
        age :'Barath age :'+req.query.age
    });
});

app.post('/hello',(req,res)=>{
    res.json({
        name : 'hello '+req.body.name,
        age :'aravind age : '+req.body.age
    });
});

app.listen(3000,() => {
    console.log('srever started on 3000')
})
