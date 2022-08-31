import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../scss/shopPage.scss';
import IndividualProductCard from '../components/ProductCards';



export function ShopImages() {

    const [gatherProductInfo, setGatherProductInfo] = useState();
    const [gatherRenderedProductInfo, setGatherRenderedProductInfo] = useState(false);
    useEffect(() => {
        Axios.get('http://localhost:5000/products').then(res => {
            let data = res.data;
            const photoItem = data.map((photo) => < IndividualProductCard
                key={photo._id} name={photo.name}
                imgUrl={photo.imgUrl} price={photo.price} artist={photo.artist}
                description={photo.description}
            />);

            setGatherProductInfo(photoItem)
            // om 'n infinite loop te stop
            setGatherRenderedProductInfo(false)

        })
    }, [gatherRenderedProductInfo])


    return (
        <div className='shop'>
            <Typography variant="h5" component="div" className='shop__info'>
                PRINT RANGE
            </Typography>
            <div className='shop__image-container'>
                {gatherProductInfo}
            </div>
        </div>
    );
}
export default ShopImages;