import React from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Alert, ButtonGroup } from '@mui/material';
import { width } from '@mui/system';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../scss/buypage.scss';


export function BuyPage(props) {

    const [addProduct, setAddProduct] = useState({
        name: '',
        surname: '',
        email: '',
        postalcode: '',
        street: '',
        country: ''
    })

    const handleAddedNewProductChange = (event) => {
        const value = event.target.value;
        setAddProduct({
            ...addProduct,
            [event.target.name]: value
        });

    };

    function buyNow() {
        const payloadData = new FormData()

        let currentStockInSession = JSON.parse(sessionStorage?.getItem("productCart"));
        console.log(currentStockInSession);

        let payload = {
            name: addProduct.name,
            surname: addProduct.surname,
            email: addProduct.email,
            postalcode: addProduct.postalcode,
            street: addProduct.street,
            country: addProduct.country,
            products: [
                currentStockInSession
            ]
        }

        payloadData.append("information", JSON.stringify(payload));

        Axios.post('http://localhost:5000/orders', payload).then(() => {
            alert("Order Made!")
            sessionStorage.clear();
        }).catch(err => {
            alert(err)
        })
    }


    return (
        <>
            <div className='userInfo'>

                <Box className='userInfo__box' component="form" sx={{
                    '& > :not(style)': { m: 1 },
                }}
                    // noValidate
                    Validate

                    autoComplete="on"
                >
                    <form className='userInfo__box__userinputs' >
                        <p>Please add your details below to continue to your cart checkout!</p>
                        <TextField className='userInfo__box__userinputs__boxes'
                            margin="normal"
                            name="name"
                            label="First Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.name}
                            onChange={handleAddedNewProductChange}
                        />
                        <TextField
                            margin="normal"
                            name="surname"
                            label="Surname"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.surname}
                            onChange={handleAddedNewProductChange}
                        />

                        <TextField
                            margin="normal"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={addProduct.email}
                            onChange={handleAddedNewProductChange}
                        />
                        <TextField
                            margin="normal"
                            name="postalcode"
                            label="Postal Code"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.postalcode}
                            onChange={handleAddedNewProductChange}
                        />
                        <TextField
                            margin="normal"
                            name="street"
                            label="Street Address"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.street}
                            onChange={handleAddedNewProductChange}
                        />
                        <TextField
                            margin="normal"
                            name="country"
                            label="Country"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.country}
                            onChange={handleAddedNewProductChange}
                        />
                        <TextField
                            margin="normal"
                            name="cardNumber"
                            label="Card Number"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.cardNumber}
                            onChange={handleAddedNewProductChange}
                        />
                        <TextField
                            margin="normal"
                            name="cvv"
                            label="CVV"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.cvv}
                            onChange={handleAddedNewProductChange}
                        />
                        <TextField
                            margin="normal"
                            name="bank"
                            label="Bank Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.bank}
                            onChange={handleAddedNewProductChange}
                        />

                    </form>

                </Box>
                <div className='userInfo__totals'>
                    <h3>Shipment Fee :<br></br> </h3>
                    <p>R100</p>
                    <hr></hr>
                    <h3>Total to Pay :</h3>
                    <p>R6000</p>

                    <div className='userInfo__totals__buybutton'>
                        <IconButton aria-label="Buy Now" color="primary" onClick={() => { buyNow() }} >
                            <ShoppingBagIcon /><p>Buy Now</p>
                        </IconButton>
                    </div>
                </div>


            </div>
        </>
    )

}

export default BuyPage;