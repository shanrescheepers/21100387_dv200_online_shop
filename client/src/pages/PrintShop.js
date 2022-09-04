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



export function ShopImages() {

    const [gatherProductInfo, setGatherProductInfo] = useState();
    const [gatherRenderedProductInfo, setGatherRenderedProductInfo] = useState(false);
    useEffect(() => {
        Axios.get('http://localhost:5000/products').then(res => {
            let data = res.data;
            console.log(data);
            const photoItem = data.map((photo) =>

                <IndividualProductCard
                    key={photo._id} 
                    id={photo._id}
                    name={photo.name}
                    imgUrl={"http://localhost:5000/wildlifeGalleryImages/" + photo.image} price={photo.price.v1} artist={photo.artist}
                    description={photo.description}
                />);

            setGatherProductInfo(photoItem)
            // om 'n infinite loop te stop
            setGatherRenderedProductInfo(false)

        })
    }, [gatherRenderedProductInfo])


    return (
        <div className='shop'>
            <h2 className='shop__info'>
                PRINT RANGE
            </h2>
            <hr style={{ width: "100px", marginTop: "-10px" }}></hr>
            <p className='shop__info__range'>Ranging from leopards to lions to small mammals and some incredible conservation actions shots.</p>
            <p className='shop__info__happy'>Happy browsing!</p>
            <div className='shop__image-container'>
                {gatherProductInfo}
             
            </div>
        </div>
    );
}
export default ShopImages;