const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/product');
require('dotenv/config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

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