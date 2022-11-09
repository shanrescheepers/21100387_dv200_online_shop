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
    return (


        <Carousel className='homepage__featureitems__carousel'>
            <div>
                <Card className='homepage__featureitems__carousel'>
                    <CardMedia>
                        <img src={buffalo} className="homepage__intro__image" style={{ height: "160px", margin: "none" }} />
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom className='homepage__featureitems__carousel__text'>
                            Buffalo Cow
                        </Typography>

                        <Typography className='homepage__featureitems__carousel__text__textbody'>
                            Shanre Scheepers - Buffalo
                            <hr style={{ width: "100px" }} />
                            R 5000
                        </Typography>
                    </CardContent>
                    <IconButton>
                        <ShoppingBasketIcon style={{ height: "50px", marginRight: "16px" }}></ShoppingBasketIcon>
                    </IconButton>

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

                        <Typography className='homepage__discounteditems__featureitems__carousel__text__textbody'>
                            Tayla Jane McCurdy - Rhino Calf
                            <hr style={{ width: "100px" }} />
                            R 34000
                        </Typography>
                    </CardContent>
                    <IconButton>
                        <ShoppingBasketIcon style={{ height: "50px", marginRight: "16px" }}></ShoppingBasketIcon>
                    </IconButton>

                </Card>
            </div>
        </Carousel>
    )
}
export default Featureditemcarousel;