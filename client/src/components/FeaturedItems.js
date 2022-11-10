import { Carousel } from "react-responsive-carousel";
import * as React from 'react';
import Axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bg from '../image folder/conservation.jpeg'
import TextField from '@mui/material/TextField';
import tayla from '../image folder/taytay.svg'
import shanre from '../image folder/shanshan.svg'
import chrisjan from '../image folder/chrischris.svg'
import cathan from '../image folder/catcat.svg'
import rhino from '../image folder/rhinobaby.svg'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import pangolin from '../image folder/1-1-12.jpg'
import rangers from '../image folder/IMG_0991.jpg'
import rangers1 from '../image folder/IMG_3199.JPG'

import buffalo from '../image folder/buffalo.svg'
import '../fonts/Calligraffitti-Regular.ttf'
import '../scss/homePage.scss';
import logo from '../assets/logo.svg'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CardActions, { IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export function Featureditemcarousel() {

    const addCart = (id) => {

        console.log("Add Cart");
        let payloadData = new FormData();
        let payload = {
            productId: id,
            quantity: 1,
            printMedium: 1,
            size: 1
        }
        // console.log("Product", product.id);
        console.log("Payload", payload);

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
                console.log("Cart item ", el.quantity);
                console.log("Payload item ", payload.quantity);

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



        console.log("Current cart length: ", currentCart.length);
        console.log("currentCart", currentCart);

        // console.log(productCart);
        sessionStorage.setItem('productCart', JSON.stringify(currentCart));
        console.log(sessionStorage.getItem("productCart"));
    }

    let navigate = useNavigate();
    const toProduct = (id) => {
        sessionStorage.setItem('productId', id);
        navigate('/productpage');

    }

    const [gatherNewestProductInfo, setGatherNewestProductInfo] = useState();
    useEffect(() => {
        Axios.get('http://localhost:5003/newestProducts').then(res => {
            let data = res.data;
            console.log(data);
            const photoItem = data.map((photo) =>

                <div>
                    <Card className='homepage__featureitems__carousel'>
                        <CardMedia className='card__intro__image'
                            component="img"
                            src={"http://localhost:5003/wildlifeGalleryImages/" + photo.image}
                            alt={photo.name}
                            height="200"
                            style={{ margin: "none" }} />
                        <CardContent>
                            <Typography gutterBottom className='homepage__featureitems__carousel__text'>
                                {photo.name}
                            </Typography>

                            <Typography className='homepage__featureitems__carousel__text__textbody'>
                                {photo.artist} - {photo.category}
                                <hr style={{ width: "100px" }} />
                                Price - R{photo.price.v1 - photo.discount}
                                <br />
                                {photo.discount > 0 ?
                                    <>
                                        Discount - R{photo.discount}.00 </> :
                                    <>   <br />  </>
                                }
                            </Typography>
                        </CardContent>
                        <IconButton onClick={() => addCart(photo._id)}>
                            <ShoppingBasketIcon style={{ height: "50px", marginRight: "16px" }}></ShoppingBasketIcon>
                        </IconButton>

                        <Button onClick={() => toProduct(photo._id)} variant="contained" href="#outlined-buttons" style={{ height: "50px", width: "150px", margin: "none", backgroundColor: "#B6AF93" }}  >
                            DESCRIPTION
                        </Button>

                    </Card>

                </div>

            );

            setGatherNewestProductInfo(photoItem)
            // om 'n infinite loop te stop

        })
    }, [])

    return (


        <Carousel className='homepage__featureitems__carousel'>
            {gatherNewestProductInfo}

        </Carousel>
    )
}
export default Featureditemcarousel;