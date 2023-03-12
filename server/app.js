const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const postRoutes = require('./routes/postRoutes');

const app = express();

const MONGO_URI = process.env.DATABASE_URL;

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://praveenterax-post-app.onrender.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use(postRoutes);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({
        message: message,
        data: data,
    });
});

mongoose.connect(MONGO_URI).then((connection) => {
    console.log('Connected to DB');
    app.listen(process.env.PORT || 4001);
}).catch(err => console.log(err));