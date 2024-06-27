const mongoose = require("mongoose");



const BookSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: { type: String, require: true },
    description: { type: String, require: true },
    pages: { type: Number, require: true },
});

module.exports = mongoose.model('_Book', BookSchema);