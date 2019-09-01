const express = require('express');
const router = express.Router();
const AWS=require('aws-sdk')
const Post=require('../Models/PostModel')
const User=require('../Models/User')
const mongoose=require('mongoose')
const jwt=require('jsonwebtoken');
const multer=require('multer')
const path=require('path')
const upload=multer({dest:'uploads/'})
const fs=require('fs')
AWS.config.update({
    accessKeyId: "AKIAIRQC4YOMAJBECL5Q",
    secretAccessKey: "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"
  });


//fetch one post from the database




//fetches all the post in database
router.get('/', (req, res, next) => {
    Post.find().then(result=>
        {

    
    
            
    res.status(200).json({
        Posts: result
    })
        }).catch(err=>(console.log(err)))

   
});
//fetch one from databas
router.get('/single/:PostId', (req, res, next) => {
    Post.findOne({"_PostId":req.params.PostId}).then(result=>
        {
                
    res.status(200).json({
        Posts: result
    })
        }).catch(err=>(console.log(err)))

   
});

//Users can post data and :userId is used as Posted by


router.post('/:userId',upload.single('selectedfile'),(req,res,next)=>{
   
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
        
      }
      if(token)
      {
          
          jwt.verify(token,"secret",(err,decode)=>{
              if(err)
              {   console.log(err)
                  res.status(404).send({
                      Message:"Please Login to continue"
                  })
              }
              else{
                 
                    var s3 = new AWS.S3();
                    var filePath = "./uploads/"+req.file.filename;
                    
                    //configuring parameters
                    var params = {
                      Bucket: 'photovaultme',
                      Body : fs.createReadStream(filePath),
                      Key : "Images/"+path.basename(filePath)+".jpg"
                    };
                    
                    s3.upload(params, (err, data)=>{
                        if(err)
                        {
                            console.log("failed to upload")
                        }
                        if(data){
                            console.log(data.location)
                        }
    
                    })
                   
                
              
                if(req.body.ImageLink=="Enter image or submit")
                {
                  var  Image="https://photovaultme.s3.amazonaws.com/Images/"+req.file.filename+".jpg"
                }
                else
                {
                    console.log("PPPPPPPPPPPP")
                    var Image=req.body.ImageLink
                }
                const posts=new Post({
                    _PostId:new mongoose.Types.ObjectId(),
                    Title: req.body.Title,
                    Text: req.body.Text,
                    ImageLink: Image,
                    PostedBy: req.params.userId,
                    Comments:0,
                    Upvotes:0,
                    Awards:{
                        Gold:"0",
                        Silver:"0",
                        Platinum:"0"
                    }
                    
                    
                    })
                    posts.save().then(res=>{
                        console.log(res)
                    })
                    .catch(err=>{
                        console.log(err)
                    })

                
              
                    
                    
              }




          })
          
          
      }
    else{
        res.send(404).send({
            Message:"Not Auth"
        })
    }  
})
router.get('/:userId',(req,res,next)=>
{
    Post.find({"PostedBy":req.params.userId}).then(result=>
        {
                
    res.status(200).send({
        result:result
    })
        }).catch(err=>(console.log(err)))
})

router.post('/Upvote/:PostId', (req, res, next) => {

    Post.updateOne( {_PostId: req.params.PostId },
        { $inc: { "Upvotes": 1} }).then(result=>{
            Post.findOne({"_PostId":req.params.PostId}).then(result=>
                {
                   User.updateOne({ _id:result.PostedBy},
                    {$inc:{"points":1}}).then(result=>
                        {
                            res.status(200).send({
                                Message:"Points added"
                            })
                        })
                         


                   })


            
        }).catch(err=>console.log(err))
        
   
});
router.post('/Downvote/:PostId', (req, res, next) => {

    Post.updateOne( {_PostId: req.params.PostId },
        { $inc: { "Upvotes": -1} }).then(result=>{
            Post.findOne({"_PostId":req.params.PostId}).then(result=>
                {
                   User.updateOne({ _id:result.PostedBy},
                    {$inc:{"points":-1}}).then(result=>
                        {
                            res.status(200).send({
                                Message:"Points added"
                            })
                        })
                         


                   })


            
        }).catch(err=>console.log(err))
        
   
});
module.exports = router;