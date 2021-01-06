var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var category = new Schema({
    categoryName:String,
    isDeleted:{
        type:Boolean,
        default:false
       },
    
});

module.exports =mongoose.model('category', category)
