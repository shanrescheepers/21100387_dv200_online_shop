import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import elephantbg from '../image folder/tayla-elephants.jpeg'
import TextField from '@mui/material/TextField';
import tayla from '../image folder/TaylaJaneMcCurdy.jpeg'
import shanre from '../image folder/shanre.JPG'
import chrisjan from '../image folder/Chrisjan.png'
import cathan from '../image folder/cathan.JPG'

import '../scss/homePage.scss';



export function Homepage() {


    return (
        <div className='homepage'>
            <div className='homepage__backgroundimg'> <img src={elephantbg} className="homepage__backgroundimg__img" /></div>
            <div className='homepage__intro'>
                <div className='homepage__intro__context'>
                    <Typography variant="h5" component="div">
                        ABOUT
                    </Typography>
                    <Typography variant="p" component="div">
                        Chosen the path of dust and roars of lions at night, following animal footsteps the next morning and afternoon, these artists are of the leading inspirationals within the safari and conservation industry.
                        Frm famed safari guides to our front running wildlife protectors, these artists share the same passion and love we'd hope to see in everyone who ventures forth within the wilderness and beyond, whether for pleasure or purpose.
                        These images all tell a story, depicting the deep conenction of man and wild. These relationships are and will be long saught after.

                        Capturing aestethic stills and action motions, all purchases made will have a 20% donation towards these artists' various conservation NGO's.

                        We believe in supporting our locals as they support us and the future of our wildlife and heritage.
                    </Typography>
                </div>
                <div className='homepage__intro__artists'>
                    <Typography variant="h5" component="div">
                        THE ARTISTS
                    </Typography>
                    <Typography variant="h6" component="div">
                        TAYLA JANE McCURDY
                        <img src={tayla} className='homepage__intro__artists__tayla' />
                    </Typography>
                    <Typography variant="h6" component="div">
                        Sgt. CHRISJAN VISSER
                        <img src={chrisjan} className='homepage__intro__artists__chrisjan' />
                    </Typography>
                    <Typography variant="h6" component="div" >
                        SHANRÉ SCHEEPERS
                        <img src={shanre} className='homepage__intro__artists__shanre' />
                    </Typography>
                    <Typography variant="h6" component="div">
                        CATHAN MOORE
                        <img src={cathan} className='homepage__intro__artists__cathan' />
                    </Typography>
                </div>
            </div>

        </div >

    )
}

export default Homepage;