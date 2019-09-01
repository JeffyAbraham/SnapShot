var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

var UserSchema= new Schema({
    _Id:  mongoose.Types.ObjectId,
    username:{type:String,required:true,index: true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    profilepic:{type:String},
    points:{type:Number},
    
});
UserSchema.index({username:'text'})
UserSchema.statics.findByUserName = function(username) {
    
    return this.findOne({ username: username});
  };

UserSchema.methods.comparePassword = function(passw, cb) {
    bcrypt.compare(passw, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports=mongoose.model('User',UserSchema);