import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const CartPage = () => {



    let currentCart = sessionStorage.getItem("productCart")
    console.log(currentCart);


    return (
        <div className='cart'>
            <div className='userInfo'>
                <h1> Input user info</h1>
                <Box component="form" sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    >
            <TextField id="name" label="Name" variant="outlined" />
            <TextField id="surname" label="Surname" variant="outlined" />
            <TextField id="email" label="Email Address" variant="outlined" />
            <TextField id="postalCode" label="Postal Code" variant="outlined" />
            <TextField id="streetAddress" label="Street Address" variant="outlined" />
            <TextField id="country" label="Country and Province" variant="outlined" />
            </Box>
            </div>

            <div className='orderTable'>
                

            </div>
           
        </div>
    );
}
export default CartPage;