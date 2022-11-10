const express = require('express');
const router = express();
const path = require('path');
const multer = require('multer');
const { Orders } = require('../models/orders');

// const router = express();

// READ EERSTE
router.get('/orders', async (req, res) => {
    await Orders.find()
        .then(orders => res.json(orders))
        .catch(error => res.status(500).json(error));
});

// CREATE TWEEDE
router.post('/orders', (req, res) => {

    let data = req.body;
    console.log("Post: ", data)
    // console.log("Date: ", req.body.date)
    // console.log("Information: ", JSON.parse(req.body.information))
    let productView = req.body.products
    // console.log(data);

    let orders = new Orders({
        name: data.name,
        surname: data.surname,
        email: data.email,
        totalPrice: data.totalPrice,
        postalcode: data.postalcode,
        street: data.street,
        country: data.country,
        products: [
            productView[0]
        ]
    });

    console.log("Orders: ", orders);
    orders.save()
        .then(item => {
            res.json(item);
        })
        .catch(err => {
            res.status(400).json({ msg: "There was an error ", err: err });
        })
        .then(response =>
            res.json(response))
        .catch(error => res.status(500).json(error));
});

// DELETE
router.delete("/order/:id", async (req, res) => {

    console.log("Delete");
    console.log(req.params);
    await Orders.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
});

module.exports = router;
