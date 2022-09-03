import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../scss/productCards.scss';

// individual product cards
const ProductPage = (props) => {


    return (
        <div className='card'>
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    src={props.imgUrl}
                    alt={props.name}
                    height="140" />
                <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                        {props.name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        R {props.price}.00
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Description</Button>
                    <Button size="small">Product Information</Button>
                </CardActions>
            </Card>
        </div >

    )
}

export default ProductPage;