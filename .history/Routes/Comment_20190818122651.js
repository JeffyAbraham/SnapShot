const express = require('express');
const router = express.Router();
const Comment=require('../Models/CommentModel')
const Post=require('../Models/PostModel')
const User=require('../Models/User')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken')






//fetches all the post in database
router.get('/:PostId', (req, res, next) => {
    Comment.find({ PostId:req.params.PostId } ).then(result=>
        {
                
    res.status(200).json({
        Comment: result
    })
        }).catch(err=>(console.log(err)))

   
});

//Users can comment and :userId is used as Posted by


router.post('/:PostId',(req,res,next)=>{

    let token = req.headers['x-access-token'] || req.headers['authorization'];
    
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
        
      }

   if(token)
   {
       jwt.verify(token,'secret',(err,decode)=>
       {
           if(err)
           {
               console.log(err)
               res.json({
                   Message:err
               })
           }
           else{
               console.log(req.body)
const comments=new Comment({
    _CommentId:new mongoose.Types.ObjectId(),
    PostId: req.params.PostId,
    Time: req.body.Time,
    Username: req.body.Username,
    UserId:req.body.UserId,
    Upvotes: 0,
    Comments:req.body.Comment,
    Awards:{
        Gold:"0",
        Silver:"0",
        Platinum:"0"
    }
    
    })
    
    comments.save().then(result=>{
        Post.update( { _PostId: req.params.PostId },
            { $inc: { "Comments" :1} }).then(res=>
                {
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
        
        res.send({result:result})
        console.log("RES")
       

    }).catch(err=>console.log(err))
    
  




            
           }
       })
   }   





})

router.post('/Upvote/:CommentId',(req,res,next)=>{
    
    Comment.updateOne( { _CommentId: req.params.CommentId },
    { $inc: { "Upvotes": 1} }).then(result=>{

        Comment.findOne({_CommentId:req.params.CommentId}).then(
            result=>{
                User.updateOne({ _id:result.UserId},
                    {$inc:{"points":1}}).then(result=>{
                        res.status(200).send({
                            Message:"Points added"
                        })


                    })
                    

            }


        )
        












    }).catch(err=>console.log(err))
    
    
    })
    router.post('/Downvote/:CommentId',(req,res,next)=>{
        console.log(req.params.CommentId)
        Comment.updateOne( { _CommentId: req.params.CommentId },
        { $inc: { "Upvotes": 1} }).then(result=>{
            res.send({result:result})
        }).catch(err=>console.log(err))
        
        
        }) 

        router.post('/Awards/:CommentId/:medal',(req,res,next)=>{
            
            if(req.params.medal==="Gold")
            {
            Comment.update( { _CommentId: req.params.CommentId },
            { $inc: { "Awards.Gold": 1} }).then(result=>{
                res.send({result:result})
            }).catch(err=>console.log(err))
            
        } if(req.params.medal==="Silver")
        {
        Comment.update( { _CommentId: req.params.CommentId },
        { $inc: { "Awards.Silver": 1} }).then(result=>{
            res.send({result:result})
        }).catch(err=>console.log(err))
        
    }   
    if(req.params.medal==="Platinum")
    {
    Comment.update( { _CommentId: req.params.CommentId },
    { $inc: { "Awards.Platinum": 1} }).then(result=>{
        res.send({result:result})
    }).catch(err=>console.log(err))
    
         } }) 
  
        router.delete('/Remove/:CommentId', (req, res, next) => {

            Comment.remove({_CommentId:req.params.CommentId}).exec().then(result=>{res.status(200).json(result)}).catch(err=>console.log(err));
        })
                
        
module.exports = router;