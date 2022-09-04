import * as React from 'react';
import Card from '@mui/material/Card';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../scss/productCards.scss';

let productCart = []
const ProductPage = () => {
    let navigate = useNavigate();
    let productId = sessionStorage.getItem("productId");
    console.log(productId);

    const [product, setProduct] = useState({
            
    });
    const [image, setImage] = useState ();
    //hier 

    const addCart = () => {
        
        console.log("Add Cart");
        let payloadData = new FormData();
    
        let payload = {
            productId:  product.id,
            quantity: 1,
            printMedium: 1,
            size:1
        }
        // console.log("Product", product.id);
        console.log("Payload", payload);
        
        let inCart = false;
        let currentCart = JSON.parse(sessionStorage?.getItem("productCart"))

        console.log("currentCart", currentCart);
        if (currentCart) {
            console.log("Cart level1");
            console.log(currentCart.length);
            for (let i = 0; i < currentCart.length; i++) {
                console.log("Cart Running");
                if (currentCart[i].productId == payload.productId) {
                    console.log("Same Id");
                    if (currentCart[i].printMedium == payload.printMedium) {
                        if (currentCart[i].size == payload.size) {
                            inCart = true;
                            currentCart[i].quantity = currentCart[i].quantity + 1;
                        }
                    }
                }
            } 
        } else{
            productCart.push(currentCart)
        }
        

        if (!inCart) {
            productCart.push(currentCart)
        }
        
        console.log(productCart);
        sessionStorage.setItem('productCart', JSON.stringify(payload));
        console.log(sessionStorage.getItem("productCart"));
    }

    useEffect(()=>{
        Axios.get('http://localhost:5000/product/' + productId)
        .then(res => {
            let data = res.data;
            console.log(data);
            setProduct({
                id: data._id,
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
            })
            let URL = 'http://localhost:5000/wildlifeGalleryImages/' + data.image;
            setImage(URL);

        })
    }, []);

    return (
        <div className='card'>
            <Card sx={{ maxWidth: 10000 }}>
                <CardMedia
                    component="img"
                    
                    height="140" />
                <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                        <img src={image}/>
                        <h1>Name: {product.name}</h1>
                        <h1>Description: {product.description}</h1>
                        <h1>Discount: {product.discount}</h1>
                        <h1>Artist: {product.artist}</h1>
                        <h1>Category: {product.category}</h1>
                        <h1>Stock: {product.stock}</h1>

                        <button onClick={()=>{addCart()}}>Add to Cart</button>

                        {/* <label for="price">Price</label>
                        <select name="prices" id="prices">
                        <option value={product.price.v0}>{product.price.v0}</option>
                        <option value={product.price.v1}>{product.price.v1}</option>
                        <option value={product.price.v2}>{product.price.v2}</option>
                        </select>

                        <select name="printMedium" id="printMedium">
                        <option value={product.printMedium.v0}>{product.printMedium.v0}</option>
                        <option value={product.printMedium.v1}>{product.printMedium.v1}</option>
                        <option value={product.printMedium.v2}>{product.printMedium.v2}</option>
                        </select>

                        <select name="size" id="size">
                        <option value={product.size.v0}>{product.size.v0}</option>
                        <option value={product.size.v1}>{product.size.v1}</option>
                        <option value={product.size.v2}>{product.size.v2}</option>
                        </select> */}

                    </Typography>
                    
                </CardContent>
                
            </Card>
        </div >

    )
}

export default ProductPage;