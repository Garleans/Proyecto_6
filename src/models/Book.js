const mongoose = require('mongoose');
const bookSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        author: {
            type: String,
        },    
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const book = mongoose.model('book', bookSchema);

module.exports = book;