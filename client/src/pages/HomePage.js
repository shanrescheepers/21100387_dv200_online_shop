import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import bg from '../image folder/conservation.jpeg'
import TextField from '@mui/material/TextField';
import tayla from '../image folder/taytay.svg'
import shanre from '../image folder/shanshan.svg'
import chrisjan from '../image folder/chrischris.svg'
import cathan from '../image folder/catcat.svg'
import rhino from '../image folder/rhinobaby.svg'
import '../fonts/Calligraffitti-Regular.ttf'
import '../scss/homePage.scss';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


export function Homepage() {


    return (
        <div className='homepage'>
            <div className='homepage__backgroundimg' >
                <img src={bg} className="homepage__backgroundimg__img" />

                <div className='homepage__intro'>
                    <div className='homepage__intro__context'>
                        <Typography variant="h4" component="div" className='homepage__intro__context__h5'>
                            ABOUT
                        </Typography>
                        <span className='homepage__intro__context__span'></span>
                        <div variant="p" className='homepage__intro__context__h5__context' style={{ paddingTop: "30px" }} >
                            Chosen the path of dust and roars of lions at night, following animal footsteps the next morning and afternoon, these artists are of the leading inspirationals within the safari and conservation industry.
                            <br />
                            <br />
                            Frm famed safari guides to our front running wildlife protectors, these artists share the same passion and love we'd hope to see in everyone who ventures forth within the wilderness and beyond, whether for pleasure or purpose.
                            These images all tell a story, depicting the deep conenction of man and wild. These relationships are and will be long saught after.
                            <br />
                            <br />
                            Capturing aestethic stills and action motions, all purchases made will have a 20% donation towards these artists' various conservation NGO's.
                            <br />
                            <br />
                            We believe in supporting our locals as they support us and the future of our wildlife and heritage.
                        </div>
                    </div>

                    <div className='homepage__intro__image'>
                        <img src={rhino} className="homepage__intro__image__rhino" />
                    </div>
                </div>

                <div className='homepage__artists'>
                    <h2 variant="h4" >
                        THE ARTISTS
                    </h2>
                    <div className='homepage__artists__artist'>
                        <Card style={{ backgroundColor: "#1E1E1E", width: "135px", height: "220px" }}>
                            <CardActionArea style={{ width: "135px", fontSize: "14px" }}>
                                <img src={tayla} className="homepage__intro__image" style={{ height: "160px", margin: "none" }} />
                                <CardContent>
                                    <Typography gutterBottom variant="p" style={{ color: "white", textAlign: "center" }} >
                                        Tayla Jane McCurdy
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        {/* chrisj */}
                        <Card style={{ backgroundColor: "#1E1E1E", width: "135px" }}>
                            <CardActionArea style={{ width: "135px", fontSize: "14px" }}>
                                <img src={chrisjan} className="homepage__intro__image" style={{ height: "160px", margin: "none" }} />
                                <CardContent>
                                    <Typography gutterBottom variant="p" component="div" style={{ color: "white" }}>
                                        Sgt. Chrisjan Vissers
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        {/* shan */}
                        <Card style={{ backgroundColor: "#1E1E1E", width: "135px" }}>
                            <CardActionArea style={{ width: "135px", fontSize: "14px" }}>
                                <img src={shanre} className="homepage__intro__image" style={{ height: "160px", margin: "none" }} />
                                <CardContent>
                                    <Typography gutterBottom variant="p" component="div" style={{ color: "white" }}>
                                        Shanré Scheepers
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        {/* cath */}
                        <Card style={{ backgroundColor: "#1E1E1E", width: "135px" }}>
                            <CardActionArea style={{ width: "135px", fontSize: "14px" }}>
                                <img src={cathan} className="homepage__intro__image" style={{ height: "160px", margin: "none" }} />
                                <CardContent>
                                    <Typography gutterBottom variant="p" component="div" style={{ color: "white" }}>
                                        Cathan Moore
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </div>
                </div >
            </div>
        </div >

    )
}

export default Homepage;