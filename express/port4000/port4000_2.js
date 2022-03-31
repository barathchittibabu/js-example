let express=require('express');
let app = express();
let axios = require('axios').default;

axios.get("http://localhost:3000/student").then (res =>{
    console.log(res.data);
});
app.listen(4000);
