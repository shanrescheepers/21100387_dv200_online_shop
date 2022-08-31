import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../assets/logo.svg'
import TextField from '@mui/material/TextField';

import '../scss/loginPage.scss';
import { Link } from 'react-router-dom';


export function LoginSignUp() {


    return (
        <div className='login'>

            <Box>
                <AppBar position="static">

                    <Toolbar className='login__toolbar'>
                        <Link to="/" className="login__toolbar__logo">
                            <img src={logo} className="login__toolbar__logo__img" />
                        </Link>
                        <Typography variant="h6" component="div" align='center' className="login__toolbar__name">
                            African Wildlife Gallery test
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            < Box className='login__inputform'>
                <div className='login__inputform__context'>
                    <h3>Welcome to AWG!</h3>
                    <h4>Register to make your shopping experience flawless. </h4>
                    <h4>All our photographers are locally based and by sharing their passion, enhancing awareness within the industry</h4>
                    <Button variant="contained" style={{ margin: "20px", backgroundColor: "#FEC32F" }}>REGISTER</Button>
                    <Button variant="outlined" style={{ color: "#8D8561", borderColor: "8D8561" }}>LOG IN</Button>

                </div>

                <TextField
                    id="standard-multiline-flexible"
                    label="First Name"
                    multiline
                    maxRows={4}

                    variant="standard"
                />
                {/* <span className='login__inputform__context__spacer'></span> */}
                <TextField
                    id="standard-textarea"
                    label="Last Name"
                    placeholder="Placeholder"
                    multiline
                    variant="standard"
                />
                {/* <span className='login__inputform__context__spacer'></span> */}
                <TextField
                    id="standard-textarea"
                    label="Email"
                    placeholder="Placeholder"
                    multiline
                    variant="standard"
                />


            </Box >
        </div >

    )
}

export default LoginSignUp;