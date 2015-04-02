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

var CartSchema = new Schema({
    cart_id: {type: Number, index: { unique: true } },
    user_name: String,
    user_email: String,
    items: [ItemSchema],
    subtotal: Number,
    shipping: Number,
    discount: Number,
    total: Number,
    payment: String,
    status: Boolean,
    updated: { type: Date, default: Date.now }
});

mongoose.model('Cart', CartSchema);