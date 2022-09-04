import * as React from 'react';
import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../assets/logo.svg'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import '../scss/topNavBar.scss';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';

export function TopNavBar() {
    let itemsInCart = JSON.parse(sessionStorage?.getItem("productCart")).length;
    const [items, setItems] = useState(itemsInCart);

    // setItems(itemsInCart.length)
    console.log(itemsInCart);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    return (
        <div className='navbar'>

            <Box>
                <AppBar position="static">

                    <Toolbar className='navbar__toolbar'>

                        <img src={logo} className="navbar__toolbar__logo__img" />
                        <div className='navbar__toolbar__links' >
                            <Link href="/" underline="hover" style={{ color: "wheat" }}>
                                HOME
                            </Link>

                            <Link href="/printshop" underline="hover" style={{ color: "wheat" }}>
                                PRINT SHOP
                            </Link>

                            <Link href="/theartists" underline="hover" style={{ color: "wheat" }}>
                                THE ARTISTS
                            </Link>

                            {/* <Link to="/" className='navbar__toolbar__link'
                                component="button"
                                variant="body1"
                                style={{ paddingRight: "16px" }}
                            ></Link> */}
                        </div>
                        <div className='navbar__toolbar__icons' >
                            <a key="Email" component="a" href="/cartpage" style={{ paddingRight: "16px", color: "wheat" }} ><StyledBadge badgeContent={itemsInCart} color="success" overlap="circular" fontSize="large" ><AddShoppingCartIcon></AddShoppingCartIcon></StyledBadge></a>

                            <a key="Email" component="a" href="https://www.instagram.com/africanamazing/?hl=en" style={{ paddingRight: "16px", color: "wheat" }} ><InstagramIcon style={{ paddingRight: "16px", color: "wheat" }}></InstagramIcon></a>

                            <a key="Email" component="a" href="mailto:name@email.com" style={{ paddingRight: "16px", color: "wheat" }} ><MailIcon></MailIcon></a>
                            {/* */}
                        </div>
                    </Toolbar>

                </AppBar>
            </Box>

        </div >

    )
}

export default TopNavBar;