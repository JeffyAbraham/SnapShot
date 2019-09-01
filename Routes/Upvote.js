const express = require('express');
const router = express.Router();
const Comment=require('../Models/CommentModel')
const mongoose=require('mongoose')






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


const comments=new Comment({
_CommentId:new mongoose.Types.ObjectId(),
PostId: req.params.PostId,
Time: req.body.Time,
Username: req.body.Username,
Upvotes: 0,
Comments:req.body.Comments

})
comments.save().then(result=>{
    res.send({result:result})
}).catch(err=>console.log(err))


})
module.exports = router;