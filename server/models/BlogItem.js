const { model, Schema } = require('mongoose');

const blogItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    text: {
        type: String,
        required: true
    },
    user: {
        type: Object,
        required: true
    },
    image: {
        type: String,
    },
    userId: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = model("BlogItem", blogItemSchema);