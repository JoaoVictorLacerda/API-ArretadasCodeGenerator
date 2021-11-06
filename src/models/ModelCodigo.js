const mongoose = require('mongoose');
const codigoSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    codigo:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Codes", codigoSchema);