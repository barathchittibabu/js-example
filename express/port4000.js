const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/hello',(req,res)=>{
    res.send('hello :'+req.query.name);
});


app.post('/hello',(req,res)=>{
    res.json({
        name : 'hello '+req.body.name
    });
});


app.post('/hello1',(req,res)=>{
    console.log('hello ');
});

app.listen(4000,() => {
    console.log('srever started on 4000');
})


