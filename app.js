const express=require('express')
const app=express();
const mongoose=require('mongoose');
const bodyparser=require('body-parser')
const morgan=require('morgan')
app.use(bodyparser.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });
  
mongoose.connect('mongodb+srv://jeffy:ur13it040@backendreact-3stfi.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true })






const post=require('./Routes/Post')
const comment=require('./Routes/Comment')
const user=require('./Routes/User')
app.use(morgan('dev'))
app.use('/post',post)
app.use('/comment',comment)
app.use('/User',user)

app.use((req,res,next)=>{
    const error=new Error('Not found');
    error.status=404;
    next(error);
})
app.use((error,req,res,next)=>{

    res.status(error.status || 500)
    res.json({
        error:{
        message:error.message
        }
    })
})









module.exports=app