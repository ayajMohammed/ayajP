var express= require('express')
var nodemon=require('nodemon')
const app=express();
const port=5000;
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
})