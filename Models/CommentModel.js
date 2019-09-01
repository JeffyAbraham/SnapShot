var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema= new Schema({
    _CommentId:  mongoose.Types.ObjectId,
    PostId: String,
    Time: String,
    Username: String,
    UserId:String,
    Upvotes: Number,
    Comments:String,
    Awards: {
        type: Map,
        of: Number
      }
    
});
module.exports=mongoose.model('Comment',CommentSchema);