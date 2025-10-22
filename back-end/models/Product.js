const mongoose = require('mongoose');

const Product = mongoose.model('product', {
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    category:{
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        require: true   
    },
    old_price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    avilable: {
        type: Boolean,
        default: true
    }
})

module.exports = Product