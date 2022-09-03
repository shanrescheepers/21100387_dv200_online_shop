import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../assets/logo.svg'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import '../scss/footer.scss';
import { IconButton } from '@mui/material';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export function Footer() {
    return (
        <div className='footer'>
            <img src={logo} className="footer__logo" />
            <div className='footer__hds'>
                <p style={{ color: "wheat" }}>Address: <br />Hoespruit, 1380<br />Limpopo, South-Africa
                </p>
                <p className='footer__c'>AAWG©2022 by Shanre Scheepers</p>
            </div>
            <div className='footer__socials'>
                <IconButton style={{ color: "wheat" }}> <InstagramIcon></InstagramIcon></IconButton>
                <IconButton style={{ color: "wheat" }}> <WhatsAppIcon></WhatsAppIcon></IconButton>
                <IconButton style={{ color: "wheat" }}> <EmailIcon></EmailIcon></IconButton>
            </div>
        </div>
    )
}

export default Footer;