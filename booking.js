const mongoose = require("mongoose");

const booking = new mongoose.Schema({
    start: Date,
    end: Date,
    guests: Number,
    fname: String,
    lname: String,
    address: String,
    country: Number,
    pcode: Number,
    city: String,
    email: String,
    phone: Number
});

module.exports = mongoose.model("booking", booking);