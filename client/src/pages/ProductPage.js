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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InfoIcon from '@mui/icons-material/Info';
let productCart = []
const ProductPage = () => {
    let navigate = useNavigate();
    let productId = sessionStorage.getItem("productId");
    const [product, setProduct] = useState({
    });
    const [image, setImage] = useState();
    const addCart = () => {
        console.log("Add Cart");
        let payloadData = new FormData();

        let payload = {
            productId: product.id,
            quantity: 1,
            printMedium: printmedium,
            size: size
        }
        console.log("Product", product.id);
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
        alert("Added to cart!")
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
    const [size, setSize] = React.useState('');
    const [printmedium, setPrintmedium] = React.useState('');

    const handleChange = (event) => {
        setSize(event.target.value);
    };
    const handleMediumChange = (event) => {
        setPrintmedium(event.target.value);
    };
    return (
        <div className='cards'>
            <Card >
                <CardMedia
                    component="img"
                />
                <CardContent className='cards__info'>
                    <Typography gutterBottom variant="p" component="div">
                        <img className='cards__info__img' src={image} style={{ width: "auto", height: "300px", textAlign: 'center' }} />
                        <h1 style={{ paddingLeft: '200px' }}>"{product.name}"</h1>
                        <hr style={{ marginLeft: '100px', width: '500px' }}></hr>
                        <h3 className='cards__info'>Description  <span style={{ color: "#B6AF93", fontFamily: "intro", }}>{product.description}</span></h3>

                        <h3 className='cards__info'>Artist  <span style={{ color: "#B6AF93", fontFamily: "intro", }}>{product.artist}</span></h3>
                        <h3 className='cards__info'>Category  <span style={{ color: "#B6AF93", fontFamily: "intro", }}>{product.category}</span></h3>
                        <h4 className='cards__info'>Stock  <span style={{ color: "#B6AF93", fontFamily: "intro", }}>{product.stock}</span></h4>

                    </Typography>
                </CardContent>
            </Card>
            <div className='card__print'>

                <ul className='card__print__rightpanel'>
                    <div className='card__print__rightpanel__alert'> <InfoIcon style={{ height: '15px' }} /> Have a look if your chosen print has a discounted price attatched!
                    </div>
                    <br></br>
                    <p className='card__print__rightpanel'>Once you're satisfied with your print choice, please select your print size and medium. <br></br>Dependant on your choices, the price will adjust.</p>
                </ul>

                <Typography className='card__prints'>
                    <h3>Discount ━ <span style={{ color: "#B6AF93", fontFamily: "intro", }}>R  {product.discount} .00</span></h3>

                    <div className='prints__printsize'>

                        <FormControl sx={{ m: 3, minWidth: 190 }} size="large">
                            <InputLabel id="demo-select-small">PRINT SIZES</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={size}
                                label="Sizes"
                                onChange={handleChange}
                            >

                                <MenuItem value={1}>{product?.size?.v0} = R {product?.price?.v0}.00</MenuItem>
                                <MenuItem value={2}>{product?.size?.v1} = R {product?.price?.v1}.00</MenuItem>
                                <MenuItem value={3}>{product?.size?.v2} = R {product?.price?.v2}.00y</MenuItem>
                            </Select>
                        </FormControl>

                        {/*                    
                        <p>SIZE {product?.size?.v0} = R {product?.price?.v0}.00</p>
                        <p >SIZE {product?.size?.v1} = R {product?.price?.v1}.00</p>
                        <p>SIZE {product?.size?.v2} = R {product?.price?.v2}.00</p> */}
                    </div>
                    <div className='prints__printmediums'>
                        <FormControl sx={{ m: 3, minWidth: 190 }} size="large">
                            <InputLabel id="demo-select-small">PRINT MEDIUMS</InputLabel>
                            <Select
                                labelId="demo-select-small"
                                id="demo-select-small"
                                value={printmedium}
                                label="Sizes"
                                onChange={handleMediumChange}
                            >

                                <MenuItem value={1}>{product?.printMedium?.v0}</MenuItem>
                                <MenuItem value={2}>{product?.printMedium?.v1}</MenuItem>
                                <MenuItem value={3}>{product?.printMedium?.v2}</MenuItem>
                            </Select>
                        </FormControl>

                        {/* <p style={{ fontFamily: "intro", letterSpacing: "3px" }}>{product?.printMedium?.v0}</p>
                        <p style={{ fontFamily: "intro", letterSpacing: "3px" }}>{product?.printMedium?.v1}</p>
                        <p style={{ fontFamily: "intro", letterSpacing: "3px" }}>{product?.printMedium?.v2}</p> */}
                    </div>
                    <h2>Happy with your choice? Go ahead and Add it to your cart!</h2>
                    <Button onClick={() => { addCart() }}><AddCircleIcon style={{ color: "green", height: "30px", paddingRight: "10px" }} size="large"> <button ></button ></AddCircleIcon>
                        <p style={{ color: "green" }}>Add to Cart</p>
                    </Button>
                </Typography>
            </div>
        </div >
    )
}

export default ProductPage;