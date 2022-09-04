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
        
        let cartControl =  true;
        let currentCart = [];
        let currentStockInSession  = JSON.parse(sessionStorage?.getItem("productCart"));
        if (currentStockInSession == null) {
            console.log("Cart is empty");
            //currentCart = currentStockInSession;
            currentCart.push(payload)
        }else{
            currentCart = currentStockInSession;
            for (let i = 0; i < currentCart.length; i++) {
                const el = currentCart[i];
                console.log("Cart item ", el.quantity);
                console.log("Payload item ", payload.quantity);

                if (el.productId == payload.productId){
                    if (el.printMedium == payload.printMedium) {
                        if (el.size == payload.size) {
                            console.log("Increment Item");

                            el.quantity = el.quantity + 1
                            cartControl = false
                        }
                    }
                    
                }
                
            }
            if (cartControl) {
                console.log("Add item");
                currentCart.push(payload)
            }
            else{
                console.log("Update Item");
            }
        }
        


        console.log("Current cart length: ", currentCart.length);
        console.log("currentCart", currentCart);

        // console.log(productCart);
        sessionStorage.setItem('productCart', JSON.stringify(currentCart));
        console.log(sessionStorage.getItem("productCart"));
    }

    useEffect(()=>{
        // sessionStorage.clear();
        console.log("Use effect load session: ",  sessionStorage.getItem("productCart"));
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