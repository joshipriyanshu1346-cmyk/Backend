const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.send('hello users');
});

app.get('/about',(req,res)=>{
    res.send('this is aboust page');
});

app.get('/Home',(req,res)=>{
    res.send('this is home page');
});
app.listen(3000)