const express = require('express');
const { Artist } = require('../models/artist');

const router = express();
// READ EERSTE
router.get('/artists', async (req, res) => {
    //  await Artist.find({}, { _id: id, _artist: Artist })
    await Artist.find()
        .then(artists => res.json(artists))
        .catch(error => res.status(500).json(error));
});
// Read 1
router.get('/artist/:id', async (req, res) => {
    await Artist.findById(req.params.id).then(artist => res.json(artist))
        .catch(error => res.status(500).json(error));
});

// CREATE
router.post('/artist', async (req, res) => {
    const artist = new Artist({ ...req.body });

    await artist.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
});

// UPDATE
router.put('/artist/:id', async (req, res) => {
    const { id } = req.params;
    await Artist.updateOne({ id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
})


// Dont do this. This is not pragmatic, this is bad. Be pragmatic. Dankie.

// router.delete('/api/deleteartist/:id', async (req, res) => {
//     const delartist = await artistSchema.remove({ _id: req.params.id });
//     res.json(delartist);
// })

// app.put("/dogs/:id", async (req, res) => {
//     const { id } = req.params;
//     await Dog.updateOne({ id }, req.body);
//     const updatedDog = await Dog.findById(id);
//     return res.status(200).json(updatedDog);
//   });

// router.patch('/api/updateartist/:id', async (req, res) => {
//     const updroduct = await artistSchema.updateOne(
//         { _id: req.params.id },
//         { $set: { artistName: req.body.artistName } }
//     )
//     res.json(updroduct);
// })

module.exports = router;