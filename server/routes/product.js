const express = require('express');
const router = express();
const path = require('path');
const multer = require('multer');
const { Product } = require('../models/product');

// Multer Middleware hier + Storing is letterlik storing. Doen eerste : vir First Initialisation
const galleryPhotographStoring = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './wildlifeGalleryImages');
    },
    filename: (req, file, callBack) => {
        console.log(file);
        callBack(null, Date.now() + path.extname(file.originalname))
    }
});

const uploadGalleryPhotograph = multer({ storage: galleryPhotographStoring })


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
router.post('/product', uploadGalleryPhotograph.single('image'),
    (req, res) => {
        
        // let data = JSON.parse(req.body);
        // console.log("Post: ", req.body)
        // console.log("Date: ", req.body.date)
        // console.log("Information: ", JSON.parse(req.body.information))
        let data = JSON.parse(req.body.information)
        // console.log(data);
  
        let product = new Product({
            date: data.date,
            description: data.description,
            name: data.name,
            price: {
                v0: data.price.v0, 
                v1: data.price.v1,
                v2: data.price.v2
            },
            discount: data.discount,
            printMedium: {
                v0: data.printMedium.v0, 
                v1: data.printMedium.v1,
                v2: data.printMedium.v2
            },
            size: {
                v0: data.size.v0, 
                v1: data.size.v1,
                v2: data.size.v2
            },
            artist: data.artist,
            category: data.category,
            stock: data.stock,
            image: req.file.filename
        });

        // console.log("Product: ", product);
        product.save()
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.status(400).json({msg: "There was an error ", err: err});
        })
        // .then(response => 
        //     res.json(response))
        // .catch(error => res.status(500).json(error));
});

// UPDATE
router.put('/product/:id', async (req, res) => {
    const { id } = req.params;
    await Product.updateOne({ id }, req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
});

// DELETE
router.delete("/product/:id", async (req, res) => {

    console.log("Delete");
    console.log(req.params);

    await Product.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))

});

// Dont do this. This is not pragmatic, this is bad. Be pragmatic. Dankie.

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