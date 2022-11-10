import * as React from 'react';
import Card from '@mui/material/Card';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../scss/productCards.scss';
import { IconButton } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// individual product cards
const IndividualProductCard = (props) => {

    let productId = sessionStorage.getItem("productId");
    console.log(productId);

    const [product, setProduct] = useState({

    });
    const [image, setImage] = useState();
    //hier 

    const addCart = () => {

        console.log("Add Cart");
        let payloadData = new FormData();
        console.log(props);
        let payload = {
            productId: props.id,
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
    const toProduct = () => {
        console.log(props);
        sessionStorage.setItem('productId', props.id);
        navigate('/productpage');

    }

    return (
        <div className='card'>
            <Card >
                <CardMedia className='card__intro__image'
                    component="img"
                    src={props.imgUrl}
                    alt={props.name}
                    height="160" />
                <CardContent>
                    <Typography gutterBottom variant="p" className='card__featureitems__carousel__text'>
                        {props.name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        {props.discount > 0 ?
                            <p> Discount R{props.discount}.00 </p> :
                            <p> No Discount </p>
                        }

                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        R{props.price - props.discount}.00
                    </Typography>
                    <Typography className='card__featureitems__carousel__text__textbody' style={{ height: "80px" }}>
                        {props.artist} - {props.description}
                        <hr style={{ width: "100px" }} />
                    </Typography>
                </CardContent>
                <IconButton gutterBottom >
                    <ShoppingBasketIcon onClick={() => addCart()} style={{ height: "50px", marginRight: "16px" }}></ShoppingBasketIcon>
                </IconButton>
                <Button gutterBottom onClick={() => toProduct()} variant="contained" href="#outlined-buttons" style={{ height: "50px", width: "150px", margin: "none", backgroundColor: "#B6AF93" }}  >
                    DESCRIPTION
                </Button>
            </Card>
        </div >
        //      <Card >
        //      <CardMedia>
        //          <img src={buffalo} className="homepage__intro__image" style={{ height: "160px", margin: "none" }} />
        //      </CardMedia>
        //      <CardContent>
        //          <Typography gutterBottom className='homepage__featureitems__carousel__text'>
        //              Buffalo Cow
        //          </Typography>
        //          {/* PULLS */}
        //          <Typography className='homepage__featureitems__carousel__text__textbody'>
        //              Shanre Scheepers - Buffalo
        //              <hr style={{ width: "100px" }} />
        //              R 5003
        //          </Typography>
        //      </CardContent>
        //      <IconButton>
        //          <ShoppingBasketIcon style={{ height: "50px", marginRight: "16px" }}></ShoppingBasketIcon>
        //      </IconButton>
        //      <Button variant="contained" href="#outlined-buttons" style={{ height: "50px", width: "150px", margin: "none", backgroundColor: "#B6AF93" }}  >
        //          SHOP PRINTS
        //      </Button>
        //  </Card>

    )
}

export default IndividualProductCard;