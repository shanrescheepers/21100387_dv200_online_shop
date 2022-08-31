import * as React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../scss/loginPage.scss';
import userService from '../services/userService'


export function AdminLogin() {

    // React.useEffect(() => {
    //     userService()
    // })
    // useEffect(() => {
    //     getReceptionists().then(response => {
    //         setReceps({
    //             receptionists: response.data
    //         });
    //     })
    // }, [])

    return (
        <div className='login'>
            < Box className='login__inputform'>
                <h3>Welcome Wildlife Admin!</h3>
                <TextField
                    id="standard-textarea"
                    label="Email"
                    placeholder="john@example.com"
                    multiline
                    variant="outlined"
                />
                <TextField
                    id="standard-textarea"
                    label="Password"
                    multiline
                    variant="outlined"
                />
                <Button className='login__inputform-button' variant="contained">LOG IN</Button>
            </Box >
        </div >
    )
}

export default AdminLogin;