var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var product = new Schema({
    productName:String,
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    qty:Number,
    isDeleted:{
        type:Boolean,
        default:false
       },
    
});

module.exports =mongoose.model('product', product)
