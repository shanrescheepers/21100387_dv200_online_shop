import * as React from 'react';
import Card from '@mui/material/Card';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../scss/productPage.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';

let productCart = []
const ProductPage = () => {
    let navigate = useNavigate();
    let productId = sessionStorage.getItem("productId");
    const [product, setProduct] = useState({
    });
    const [image, setImage] = useState();
    const addCart = () => {
        // console.log("Add Cart");
        let payloadData = new FormData();

        let payload = {
            productId: product.id,
            quantity: 1,
            printMedium: 1,
            size: 1
        }
        // console.log("Product", product.id);
        // console.log("Payload", payload);
        let cartControl = true;
        let currentCart = [];
        let currentStockInSession = JSON.parse(sessionStorage?.getItem("productCart"));
        if (currentStockInSession == null) {
            console.log("Cart is empty");
            //currentCart = currentStockInSession;
            currentCart.push(payload)
        } else {
            currentCart = currentStockInSession;
            for (let i = 0; i < currentCart.length; i++) {
                const el = currentCart[i];
                // console.log("Cart item ", el.quantity);
                // console.log("Payload item ", payload.quantity);

                if (el.productId == payload.productId) {
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
            else {
                console.log("Update Item");
            }
        }

        // console.log("Current cart length: ", currentCart.length);
        // console.log("currentCart", currentCart);
        // console.log(productCart);
        sessionStorage.setItem('productCart', JSON.stringify(currentCart));
        // console.log(sessionStorage.getItem("productCart"));
    }

    useEffect(() => {
        // sessionStorage.clear();
        console.log("Use effect load session: ", sessionStorage.getItem("productCart"));
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
            <Card >
                <CardMedia
                    component="img"
                />
                <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                        <img src={image} style={{ width: "400px" }} />
                        <h3 >"{product.name}"</h3>
                        <h3 >Description ━ <span style={{ color: "#B6AF93", fontFamily: "intro", }}>{product.description}</span></h3>
                        <h3>Discount ━ <span style={{ color: "#B6AF93", fontFamily: "intro", }}>R {product.discount}.00</span></h3>
                        <h3>Artist ━ <span style={{ color: "#B6AF93", fontFamily: "intro", }}>{product.artist}</span></h3>
                        <h3>Category ━ <span style={{ color: "#B6AF93", fontFamily: "intro", }}>{product.category}</span></h3>
                        <h4>Stock ━ <span style={{ color: "#B6AF93", fontFamily: "intro", }}>{product.stock}</span></h4>
                        <Button ><AddCircleIcon style={{ color: "green", height: "30px", paddingRight: "10px" }} size="large"> <button onClick={() => { addCart() }}></button ></AddCircleIcon>
                            <p style={{ color: "green" }}>Add to Cart</p>
                        </Button>
                    </Typography>
                </CardContent>
            </Card>
            <div className='card__print'>
                <Typography className='card__prints'>
                    <div className='prints__printsize'>
                        <h4>PRINT SIZES</h4>
                        <p>SIZE {product.size.v0} = R {product.price.v0}.00</p>
                        <p >SIZE {product.size.v1} = R {product.price.v1}.00</p>
                        <p>SIZE {product.size.v2} = R {product.price.v2}.00</p>
                    </div>
                    <div className='prints__printmediums'>
                        <h4 > PRINT MEDIUMS</h4>
                        <p style={{ fontFamily: "intro", letterSpacing: "3px" }}>{product.printMedium.v0}</p>
                        <p style={{ fontFamily: "intro", letterSpacing: "3px" }}>{product.printMedium.v1}</p>
                        <p style={{ fontFamily: "intro", letterSpacing: "3px" }}>{product.printMedium.v2}</p>
                    </div>
                </Typography>
            </div>
        </div >
    )
}

export default ProductPage;