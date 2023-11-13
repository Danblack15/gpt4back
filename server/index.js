const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://admin:admin@cluster0.bdnr78s.mongodb.net/?retryWrites=true&w=majority"
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

app.listen(5000, () => {
    console.log('Server is started!');
});