var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
    title: {type: String, required:true, maxlength:50, unique:true},
    status:{type:Boolean, default:false, required:true},
    price: {type:Number, min:0, max:10000, required:true},
    description: {type:String, required:true, maxlength:300},
    category: {type:String, ref:'Category', required:true},
    picture:{type:String, required: true,},
    inCart: {type:Boolean, default:false}, 
});

module.exports = mongoose.model('Menu', MenuSchema);