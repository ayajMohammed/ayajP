var express= require('express')
const app=express();
const port=5000;
var routers = require('./src/routes/index');
// // Initiallize Route
routers.initialize(app);
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})




// var express = require('express');
// var app = express();
// var env = require("./config/"+process.env.NODE_ENV)
// const port = env.port;
// var routers = require('./src/routes/index');
// // Initiallize Route
// routers.initialize(app);
// app.get('/environment',(req,res)=>{
//     res.send({
//         code:200,
//         msg:process.env.NODE_ENV
//     })
// })
// app.listen(port,() => {
//     console.log("server running on"+"--"+process.env.NODE_ENV);

// });





