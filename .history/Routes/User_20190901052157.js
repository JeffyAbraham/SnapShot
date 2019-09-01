const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("../Models/User");
const jwt=require("jsonwebtoken")









router.get('/Single/:userId', function(req, res, next){
  User.findOne({'_id':req.params.userId}, function(err, success) {
      if(success){
        res.status(200).json({
          userinfo: success
      })
      } else {
          console.log('Result does not exist');
     }
  });
})














router.post("/login",(req,res,next)=>{

    User.find({email:req.body.email}).exec().then(result=>{
        if(result.length<1)
        {
            return res.status(401).json({

                message:"Error nor found"
            }
            
            )
        }
     bcrypt.compare(req.body.password,result[0].password,(err,results)=>
     {
         if(err)
        {
            return res.status(401).json({
                message:'Auth failed'
            })
        }
        if(results)
        
        {   console.log(result)
            const token=jwt.sign({
                username:result[0].username,
                email:result[0].email,
                userId:result[0]._id,
                
            },"secret",{expiresIn:"5minutes"});
            
            return res.status(200).json({
                message:"Auth Success",
                Token:token
            })
        }

        res.status(401).json({
            message:"Auth Failed"
        })

     })    
    
    
    
    })




})

router.post("/signup", (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              username:req.body.username,
              email: req.body.email,
              password: hash,
              profilepic:"https://avatarfiles.alphacoders.com/951/95107.jpg",
              points:0
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  message: "User created"
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
});
router.get('/search/:name', (req, res, next) => {
  var r = new RegExp(req.params.name, "i");
    
    User.find( { username: { $regex: r}  } )
    .exec(function(err, docs) { 
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.json({
                message:docs
            })
        }




     });
   
});


module.exports = router;