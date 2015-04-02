/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

var ItemSchema = new Schema({
    id: Number,
    sku: String,
    name: String,
    price: Number,
    qty: Number
});

//mongoose.model('Item', ItemSchema);

