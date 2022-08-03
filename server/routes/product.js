const express = require('express');
const { Product } = require('../models/product');

const router = express();
// READ EERSTE
router.get('/products', async (req, res) => {
    await Product.find()
        .then(products => res.json(products))
        .catch(error => res.status(500).json(error));
});

router.get('/product/:id', async (req, res) => {
    await Product.findById(req.params.id).then(product => res.json(product))
        .catch(error => res.status(500).json(error));
});

// CREATE TWEEDE
router.post('/product', async (req, res) => {
    const product = new Product({ ...req.body });

    await product.save()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
});

// UPDATE
router.put('/product/:id', async (req, res) => {
    const { id } = req.params;
    await Product.updateOne({ id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
})

// DELETE
router.delete("/product/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
});

// Dont do this. This is not pragmatic, this is bad. Altyd pragmatic. Dankie.
// router.delete('/api/deleteProduct/:id', async (req, res) => {
//     const delProduct = await productSchema.remove({ _id: req.params.id });
//     res.json(delProduct);
// })

// app.put("/dogs/:id", async (req, res) => {
//     const { id } = req.params;
//     await Dog.updateOne({ id }, req.body);
//     const updatedDog = await Dog.findById(id);
//     return res.status(200).json(updatedDog);
//   });

// router.patch('/api/updateProduct/:id', async (req, res) => {
//     const updroduct = await productSchema.updateOne(
//         { _id: req.params.id },
//         { $set: { productName: req.body.productName } }
//     )
//     res.json(updroduct);
// })

module.exports = router;