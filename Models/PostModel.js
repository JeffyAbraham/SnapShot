var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema= new Schema({
  _PostId:  mongoose.Types.ObjectId,
  Title: String,
  Text:   String,
  Upvotes: Number,
  PostedBy: String,
  Comments: Number,
  ImageLink: String,
  Awards: {
    type: Map,
    of: Number
  }
});
module.exports=mongoose.model('Post',PostSchema);