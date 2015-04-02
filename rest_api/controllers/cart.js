var mongoose = require('mongoose'),
    Cart = mongoose.model("Cart")

exports.createCart = function (req, res, next) {
    // Debug: log the request body
    console.log(req.body);
    // Instantiate a new cart schema
    var cartModel = new Cart(req.body);
    // Convert model schema to object
    var update = cartModel.toObject();
    // Delete the _id propriety from the schema
    delete update["_id"];
    // Perform the "upsert" option (if exists update, else insert)
    Cart.findOneAndUpdate({cart_id: req.body.cart_id}, update, {upsert: true}, function (err, cart) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: cart
            })
        }
    });
}