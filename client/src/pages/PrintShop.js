import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../scss/printShop.scss';
import IndividualProductCard from '../components/ProductCards';
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded';


export function ShopImages() {

    const [gatherProductInfo, setGatherProductInfo] = useState();
    const [gatherRenderedProductInfo, setGatherRenderedProductInfo] = useState(false);
    useEffect(() => {
        Axios.get('http://localhost:5003/products').then(res => {
            let data = res.data;
            console.log(data);
            const photoItem = data.map((photo) =>

                <IndividualProductCard
                    key={photo._id}
                    id={photo._id}
                    discount={photo.discount}
                    name={photo.name}
                    imgUrl={"http://localhost:5003/wildlifeGalleryImages/" + photo.image} price={photo.price.v1} artist={photo.artist}
                    description={photo.description}
                />);

            setGatherProductInfo(photoItem)
            // om 'n infinite loop te stop
            setGatherRenderedProductInfo(false)

        })
    }, [gatherRenderedProductInfo])


    return (
        <div className='shop' id='totop'>
            <h2 className='shop__info'>
                PRINT RANGE
            </h2>
            <hr style={{ width: "100px", marginTop: "-10px" }}></hr>
            <p className='shop__info__range'>Ranging from leopards to lions to small mammals and some incredible conservation actions shots.</p>
            <p style={{ fontSize: "12px", paddingBottom: "10px" }} className='shop__info__happy'>With each image, courier costs is covered with the total price of the artwork, why? <br></br> Because your support is all we ask for, your awareness, and your help, and by purchasing an artwork, the extra mile is gone for, and thus, we do the same.</p>
            <p className='shop__info__happy'>Happy browsing!</p>
            <div className='shop__image-container'>
                {gatherProductInfo}

            </div>
            <div className='endofgallery'>
                <h3>    ~ End of Gallery ~</h3>
                <a href='#totop' style={{ color: 'black' }}> <ArrowCircleUpRoundedIcon style={{ height: '50px', width: '50px', }}></ArrowCircleUpRoundedIcon></a>
                <p>BACK TO TOP</p>
            </div>
        </div>
    );
}
export default ShopImages;