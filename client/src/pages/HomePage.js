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


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export function Homepage() {

    let productId = sessionStorage.getItem("productId");
    console.log(productId);

    const [product, setProduct] = useState({

    });
    const [image, setImage] = useState();
    //hier 

    const addCart = () => {

        console.log("Add Cart");
        let payloadData = new FormData();
        let id = "6314beab112386b16a0462f6";
        console.log();
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

    return (
        <div className='homepage'>
            <div className='homepage__backgroundimg' >
                <img src={bg} className="homepage__backgroundimg__img" />

                <div className='homepage__intro'>
                    <div className='homepage__intro__context'>
                        <Typography variant="h4" component="div" className='homepage__intro__context__h5'>
                            ABOUT
                        </Typography>
                        <span className='homepage__intro__context__span'></span>
                        <div variant="p" className='homepage__intro__context__h5__context' style={{ paddingTop: "30px" }} >
                            Chosen the path of dust and roars of lions at night, following animal footsteps the next morning and afternoon, these artists are of the leading inspirationals within the safari and conservation industry.
                            <br />
                            <br />
                            From famed and humbled safari guides to our front running wildlife protectors, these artists and naturalists share the same passion and love we'd hope to see in everyone who ventures forth within the wilderness and beyond, whether for pleasure or purpose.
                            These images all tell a story, depicting the deep conenction of man and wild. These relationships are and will be long saught after.
                            <br />
                            <br />
                            Capturing aestethic stills and action motions, all purchases made will have a 20% donation towards these artists' various conservation NGO's.
                            <br />
                            <br />
                            We believe in supporting our locals as they support us and the future of our wildlife and heritage.
                        </div>
                    </div>

                    <div className='homepage__intro__image'>
                        <img src={rhino} className="homepage__intro__image__rhino" />
                    </div>
                </div>

                <div className='homepage__artists'>
                    <h2 variant="h4" >
                        THE ARTISTS <hr style={{ width: "200px" }}></hr>
                    </h2>
                    <div className='homepage__artists__artist'>
                        <Card style={{ backgroundColor: "#1E1E1E", width: "135px", height: "220px" }}>
                            <CardActionArea style={{ width: "135px", fontSize: "14px" }}>
                                <img src={tayla} className="homepage__intro__image" style={{ height: "160px", margin: "none" }} />
                                <CardContent>
                                    <Typography gutterBottom variant="p" style={{ color: "white", textAlign: "center" }} >
                                        Tayla Jane McCurdy
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        {/* chrisj */}
                        <Card style={{ backgroundColor: "#1E1E1E", width: "135px" }}>
                            <CardActionArea style={{ width: "135px", fontSize: "14px" }}>
                                <img src={chrisjan} className="homepage__intro__image" style={{ height: "160px", margin: "none" }} />
                                <CardContent>
                                    <Typography gutterBottom variant="p" component="div" style={{ color: "white" }}>
                                        Sgt. Chrisjan Vissers
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        {/* shan */}
                        <Card style={{ backgroundColor: "#1E1E1E", width: "135px" }}>
                            <CardActionArea style={{ width: "135px", fontSize: "14px" }}>
                                <img src={shanre} className="homepage__intro__image" style={{ height: "160px", margin: "none" }} />
                                <CardContent>
                                    <Typography gutterBottom variant="p" component="div" style={{ color: "white" }}>
                                        Shanré Scheepers
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        {/* cath */}
                        <Card style={{ backgroundColor: "#1E1E1E", width: "135px" }}>
                            <CardActionArea style={{ width: "135px", fontSize: "14px" }}>
                                <img src={cathan} className="homepage__intro__image" style={{ height: "160px", margin: "none" }} />
                                <CardContent>
                                    <Typography gutterBottom variant="p" component="div" style={{ color: "white" }}>
                                        Cathan Moore
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </div>
                </div >
            </div>
            <div className='homepage__featureitems'>

                <h2 className='artworks' >LATEST ARTWORKS <hr ></hr></h2>
                <Carousel className='homepage__featureitems__carousel'>
                    <div>
                        <Card >
                            <CardMedia>
                                <img src={buffalo} className="homepage__intro__image" style={{ height: "160px", margin: "none" }} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom className='homepage__featureitems__carousel__text'>
                                    Buffalo Cow
                                </Typography>
                                {/* PULLS */}
                                <Typography className='homepage__featureitems__carousel__text__textbody'>
                                    Shanre Scheepers - Buffalo
                                    <hr style={{ width: "100px" }} />
                                    R 5000
                                </Typography>
                            </CardContent>
                            <IconButton>
                                <ShoppingBasketIcon style={{ height: "50px", marginRight: "16px" }}></ShoppingBasketIcon>
                            </IconButton>
                            <Button variant="contained" href="#outlined-buttons" style={{ height: "50px", width: "150px", margin: "none", backgroundColor: "#B6AF93" }}  >
                                SHOP PRINTS
                            </Button>
                        </Card>
                    </div>



                    <div>
                        <Card >
                            <CardMedia>
                                <img src={pangolin} className="homepage__intro__image" style={{ height: "160px", margin: "none", width: "100px" }} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom className='homepage__featureitems__carousel__text'>
                                    Unlawful Target
                                </Typography>
                                {/* PULLS */}
                                <Typography className='homepage__featureitems__carousel__text__textbody'>
                                    Shanre Scheepers - Pangolin
                                    <hr style={{ width: "100px" }} />
                                    R 23889.00
                                </Typography>
                            </CardContent>
                            <IconButton>
                                <ShoppingBasketIcon style={{ height: "50px", marginRight: "16px" }} onClick={() => { addCart() }}></ShoppingBasketIcon>
                            </IconButton>
                            <Button variant="contained" onClick={() => { addCart() }} href="#outlined-buttons" style={{ height: "50px", width: "150px", margin: "none", backgroundColor: "#B6AF93" }}  >
                                SHOP PRINTS
                            </Button>
                        </Card>
                    </div>
                    <div>
                        <Card >
                            <CardMedia>
                                <img src={rangers} className="homepage__intro__image" style={{ height: "160px", margin: "none", width: "130px" }} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom className='homepage__featureitems__carousel__text'>
                                    Rangers
                                </Typography>
                                {/* PULLS */}
                                <Typography className='homepage__featureitems__carousel__text__textbody'>
                                    Chrisjan Visser - Rangers
                                    <hr style={{ width: "100px" }} />
                                    R 45000
                                </Typography>
                            </CardContent>
                            <IconButton>
                                <ShoppingBasketIcon style={{ height: "50px", marginRight: "16px" }}></ShoppingBasketIcon>
                            </IconButton>
                            <Button variant="contained" href="#outlined-buttons" style={{ height: "50px", width: "150px", margin: "none", backgroundColor: "#B6AF93" }}  >
                                SHOP PRINTS
                            </Button>
                        </Card>
                    </div>
                    <div>
                        <Card >
                            <CardMedia>
                                <img src={rangers1} className="homepage__intro__image" style={{ height: "160px", margin: "none", width: "300px" }} />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom className='homepage__featureitems__carousel__text'>
                                    Rangers In Action
                                </Typography>
                                {/* PULLS */}
                                <Typography className='homepage__featureitems__carousel__text__textbody'>
                                    Chrisjan Visser - Rangers
                                    <hr style={{ width: "100px" }} />
                                    R 55000
                                </Typography>
                            </CardContent>
                            <IconButton>
                                <ShoppingBasketIcon style={{ height: "50px", marginRight: "16px" }}></ShoppingBasketIcon>
                            </IconButton>
                            <Button variant="contained" href="#outlined-buttons" style={{ height: "50px", width: "150px", margin: "none", backgroundColor: "#B6AF93" }}  >
                                SHOP PRINTS
                            </Button>
                        </Card>
                    </div>



                </Carousel>


            </div>

            <div className='homepage__discounteditems'>
                <div className='homepage__discounteditems__featureitems'>

                    <h2 className='discount' style={{ textAlign: "center", paddingBottom: "15px" }} >DISCOUNTS<hr className='discounthr' ></hr></h2>
                    <Carousel className='homepage__discounteditems__featureitems__carousel'>
                        <div>
                            <Card >
                                <CardMedia>
                                    <img src={buffalo} className="homepage__discounteditems__intro__image" style={{ height: "160px", margin: "none" }} />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom className='homepage__homepage__discounteditems__featureitems__carousel__text'>
                                        Buffalo Cow
                                    </Typography>
                                    {/* PULLS */}
                                    <Typography className='homepage__discounteditems__featureitems__carousel__text__textbody'>
                                        Shanre Scheepers - Buffalo
                                        <hr style={{ width: "100px" }} />
                                        R 5000
                                    </Typography>
                                </CardContent>
                                <IconButton>
                                    <ShoppingBasketIcon style={{ height: "50px", marginRight: "16px" }}></ShoppingBasketIcon>
                                </IconButton>
                                <Button variant="contained" href="#outlined-buttons" style={{ height: "50px", width: "150px", margin: "none", backgroundColor: "#B6AF93" }}  >
                                    SHOP PRINTS
                                </Button>
                            </Card>
                        </div>



                        <div>
                            <Card >
                                <CardMedia>
                                    <img src={buffalo} className="homepage__discounteditems__intro__image" style={{ height: "160px", margin: "none" }} />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom className='homepage__homepage__discounteditems__featureitems__carousel__text'>
                                        Buffalo Cow
                                    </Typography>
                                    {/* PULLS */}
                                    <Typography className='homepage__discounteditems__featureitems__carousel__text__textbody'>
                                        Shanre Scheepers - Buffalo
                                        <hr style={{ width: "100px" }} />
                                        R 5000
                                    </Typography>
                                </CardContent>
                                <IconButton>
                                    <ShoppingBasketIcon style={{ height: "50px", marginRight: "16px" }}></ShoppingBasketIcon>
                                </IconButton>
                                <Button variant="contained" href="#outlined-buttons" style={{ height: "50px", width: "150px", margin: "none", backgroundColor: "#B6AF93" }}  >
                                    SHOP PRINTS
                                </Button>
                            </Card>
                        </div>
                        <div>
                            <Card >
                                <CardMedia>
                                    <img src={rhino} className="homepage__intro__image" style={{ height: "160px", margin: "none" }} />
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom className='homepage__homepage__discounteditems__featureitems__carousel__text'>
                                        Rhino Calf
                                    </Typography>
                                    {/* PULLS */}
                                    <Typography className='homepage__discounteditems__featureitems__carousel__text__textbody'>
                                        Tayla Jane McCurdy - Rhino Calf
                                        <hr style={{ width: "100px" }} />
                                        R 34000
                                    </Typography>
                                </CardContent>
                                <IconButton>
                                    <ShoppingBasketIcon style={{ height: "50px", marginRight: "16px" }}></ShoppingBasketIcon>
                                </IconButton>
                                <Button variant="contained" href="#outlined-buttons" style={{ height: "50px", width: "150px", margin: "none", backgroundColor: "#B6AF93" }}  >
                                    SHOP PRINTS
                                </Button>
                            </Card>

                        </div>

                    </Carousel>
                </div>
            </div>

        </div >

    )
}

export default Homepage;