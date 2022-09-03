const mongoose = require('mongoose');
let newDate = new Date();
const ProductSchema = mongoose.Schema({
    date:{ type: Number},
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        v0: { type: Number,required: true},
        v1: { type: Number,required: true},
        v2: { type: Number,required: true},
    },
    discount: {
        type: Number,
        required: false
    },
    printMedium: {
        v0: { type: String,required: true},
        v1: { type: String,required: true},
        v2: { type: String,required: true},
    },
 
    size: {
        v0: { type: String,required: true},
        v1: { type: String,required: true},
        v2: { type: String,required: true},
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
    image: {type: String,required: true}
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product };