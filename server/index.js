const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product');
const artistRoute = require('./routes/artist');
require('dotenv/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(productRoute);
app.use(artistRoute);

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'wildlife',
}).then(() => console.log("Connected to wildlife DB"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started on port: ${PORT}`) });