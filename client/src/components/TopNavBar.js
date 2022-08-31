import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../assets/logo1.svg'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import '../scss/topNavBar.scss';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';

export function TopNavBar() {


    return (
        <div className='navbar'>

            <Box>
                <AppBar position="static">

                    <Toolbar className='navbar__toolbar'>

                        <img src={logo} className="navbar__toolbar__logo__img" />

                        <Typography variant="h5" component="div" className="navbar__toolbar__name">
                            African Wildlife Gallery
                        </Typography>


                        <div className='navbar__toolbar__links' >
                            <Link className='navbar__toolbar__link'
                                component="button"
                                variant="body1"
                                style={{ paddingRight: "16px" }}
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}> HOME
                            </Link>
                            <Link className='navbar__toolbar__name__logo__img__link'
                                component="button"
                                variant="body1"
                                style={{ paddingRight: "16px" }}
                                onClick={() => {
                                    console.info("I'm a button.");
                                }}> PRINT SHOP
                            </Link>
                            <Link className='navbar__toolbar__logo__img__link'
                                component="button"
                                variant="body1"

                                onClick={() => {
                                    console.info("I'm a button.");
                                }}> THE ARTISTS
                            </Link>

                        </div>
                        <Box className='navbar__toolbar__icons' >
                            <AddShoppingCartIcon style={{ paddingRight: "16px" }}></AddShoppingCartIcon>
                            <InstagramIcon style={{ paddingRight: "16px" }}></InstagramIcon>
                            <MailIcon style={{ paddingRight: "16px" }}></MailIcon>
                        </Box>
                    </Toolbar>

                </AppBar>
            </Box>

        </div >

    )
}

export default TopNavBar;