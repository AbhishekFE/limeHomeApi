const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require('body-parser');
const booking = require("./booking");

mongoose.connect("mongodb+srv://abhishek:TDS5Xg55spuHHKo2@cluster0.begrjbv.mongodb.net/?retryWrites=true&w=majority");

const app = express();
const db = mongoose.connection;

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(cors({origin: 'http://localhost:4200'}));

db.on('connected', () => {
    console.log('db connected')
})

db.on('error', () => {
    console.log('db connected')
})

app.post('/book', (req, res) => {
    var newBooking = new booking(req.body);
    newBooking.save((err, book) => {
        if (err) {
            res.send("error in saving")
        } else {
            res.send(book);
        }
    });
});

app.use(cors());
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`listening in port ${port}`);
});
