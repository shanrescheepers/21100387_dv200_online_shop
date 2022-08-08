const mongoose = require('mongoose');

const ArtistSchema = mongoose.Schema({

    fullname: {
        type: String,
        required: true
    },
});

const Artist = mongoose.model("Artist", ArtistSchema);

module.exports = { Artist };