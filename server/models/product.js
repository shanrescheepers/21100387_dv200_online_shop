const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    color: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: false
    },
    printMedium: {
        type: [String],
        required: true
    },
    range: {
        type: String,
        required: true
    },
    size: {
        type: [String],
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };