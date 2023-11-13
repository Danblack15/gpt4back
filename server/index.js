const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
    .connect(
        process.env.DB_CONNECT
    ).then(() => {
        console.log('Connected to database');
    }).catch((err) => {
        console.log(err)
    });

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.use('/auth', require('./routes/auth'));
app.use('/blog-item', require('./routes/blog-item'));

app.listen(PORT, () => {
    console.log('Server is started!');
});