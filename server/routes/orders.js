const express = require('express');
const router = express();
const path = require('path');
const multer = require('multer');
const { Orders } = require('../models/orders');

// READ EERSTE
router.get('/orders', async (req, res) => {
    await Orders.find()
        .then(Orders => res.json(orders))
        .catch(error => res.status(500).json(error));
});

// CREATE TWEEDE
router.post('/orders', (req, res) => {
        
        // let data = JSON.parse(req.body);
        // console.log("Post: ", req.body)
        // console.log("Date: ", req.body.date)
        // console.log("Information: ", JSON.parse(req.body.information))
        let data = JSON.parse(req.body.information)
        // console.log(data);
  
        let product = new Product({
            name: data.name,
            surname: data.surname,
            email: data.email,
            postalcode: data.postalcode,
            street: data.street,
            country: data.country,
            products:[
        
            ]
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