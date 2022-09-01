const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const productRoute = require('./routes/product');
const artistRoute = require('./routes/artist');
const userRoute = require('./routes/user');
require('dotenv/config');

const app = express();
// connect hier met ander localhost
app.use(cors({
    origin: 'http://localhost:3000'
}));

// image middleware hier
app.use('galleryPhotographs', express.static('galleryPhotographs'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(productRoute);
app.use(artistRoute);
app.use(userRoute)

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