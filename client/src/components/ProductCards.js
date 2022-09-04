import * as React from 'react';
import Card from '@mui/material/Card';
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

    let navigate = useNavigate();
  const toProduct = () => { 
    sessionStorage.setItem('productId', props.id);
    navigate('/productpage');
    console.log(props);
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
                        R {props.price}.00
                    </Typography>
                    <Typography className='card__featureitems__carousel__text__textbody'>
                        Shanre Scheepers - Buffalo
                        <hr style={{ width: "100px" }} />
                    </Typography>
                </CardContent>
                <IconButton>
                    <ShoppingBasketIcon style={{ height: "50px", marginRight: "16px" }}></ShoppingBasketIcon>
                </IconButton>
                <Button variant="contained" href="#outlined-buttons" style={{ height: "50px", width: "150px", margin: "none", backgroundColor: "#B6AF93" }}  >
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
        //              R 5000
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