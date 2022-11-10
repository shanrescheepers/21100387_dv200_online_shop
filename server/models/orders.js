const mongoose = require('mongoose');
let newDate = new Date();
const OrdersSchema = mongoose.Schema({
    orderDate: { type: Date, default: Date.now },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    postalcode: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    products: [

    ]

});

const Orders = mongoose.model("Orders", OrdersSchema);

module.exports = { Orders };