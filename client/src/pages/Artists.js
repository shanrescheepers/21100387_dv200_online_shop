import * as React from 'react';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import tayla from '../image folder/taytay.svg'
import shanre from '../image folder/shanshan.svg'
import chrisjan from '../image folder/chrischris.svg'
import cathan from '../image folder/catcat.svg'
import '../scss/artists.scss';



export function Artists() {


    return (

        <div className='artist'>
            <div className='artist__1'>
                <Card style={{ backgroundColor: "#1E1E1E", width: "135px", height: "160px", marginLeft: "20px" }}>
                    <CardActionArea style={{ width: "135px", fontSize: "14px" }}>
                        <img src={tayla} className="artist__image" style={{ height: "160px", margin: "none" }} />
                    </CardActionArea>
                </Card>
                <Typography gutterBottom variant="h6" style={{ color: "black", textAlign: "left", marginLeft: "-5px" }} >
                    Tayla Jane McCurdy
                </Typography>
                <p className='artist__11' style={{ width: "170px", paddingLeft: "1px", fontSize: "12px" }}>Tayla Jane McCurdy is a South African wildlife guide and television presenter with a passion for wildlife, storytelling, and empowering women. She's also the brave wilderness' Ranger Exchange Host, and a private safari guide for <a href="https://wanderingthru.com/">Wandering Thru.</a> From Safaris all over SA and Nort and East Africa, Tayla is a frontrunner in the private safari industry, as well as the leading lady for female guides with her newest all-female guiding clothing range, the <a href="https://taylajanerange.com/">Tayla Jane Clothing Range.</a> With every image sold, 15% will go to raising funds to purchase tracking collars for pangolins.</p>
            </div>

            <div className='artist__2'> {/* chrisj */}
                <Card style={{ backgroundColor: "#1E1E1E", width: "135px", height: "160px" }}>
                    <CardActionArea style={{ width: "135px", fontSize: "14px" }}>
                        <img src={chrisjan} className="artist__image" style={{ height: "160px", margin: "none" }} />
                    </CardActionArea>
                </Card>
                <Typography gutterBottom variant="h6" style={{ color: "black", textAlign: "left", marginLeft: "-27px" }} >
                    Sgt. Chrisjan Vissers
                </Typography>
                <p className='artist__11' style={{ width: "170px", fontSize: "12px", marginLeft: "-18px" }}>Sgt. for a reason. <br></br>Dedicated his mind, body and soul to our African Wildlife. Specialising in working dogs for conservation, Chrisjan is THE frontrunner of our conservation world, and co-owner of Kilo9 along with his partner, Simon Troskie. The world of conservation cannot afford to lose Chrisjan. Putting his life on the line for our heritage, has resulted in a major back injury that needs immediate attention. To help raise funds for this inspirational man, please head over to <a href="https://www.gofundme.com/f/save-a-ranger-to-save-rhinos-and-wildlife?qid=0f790f26b7f5719357e0233c65b47521" style={{ fontWeight: "bold" }}>Save a Ranger to Save Rhinos and Wildlife</a>. Every bit helps, every bit would be greatly appreciated! 15% of each image sold will be donated to fund the Kilo9 organisation and conservation tools required to combat poaching.</p>
            </div>
            <div className='artist__3'> {/* shan      */}
                <Card style={{ backgroundColor: "#1E1E1E", width: "135px", height: "160px" }}>
                    <CardActionArea style={{ width: "135px", fontSize: "14px" }}>
                        <img src={shanre} className="artist__image" style={{ height: "160px", margin: "none" }} />
                    </CardActionArea>
                </Card>
                <Typography gutterBottom variant="h6" style={{ color: "black", textAlign: "left", marginLeft: "-10px" }} >
                    Shanre Scheepers
                </Typography>
                <p className='artist__11' style={{ width: "170px", fontSize: "12px", marginLeft: "-18px" }}>Shanre studied under some of the iconic waymakers and pathfinders in the industry whereafter she went over to working 6 years actively as a tracker, conservation assistant, safari guide, and manager of a private villa within the Greater Kruger National Park. Spending day in and day out within the african bush as a naturalist, the passion for active engagement with conservation grew more and more. Influenced by both Chrisjan and Tayla's vision for wildlife, she has now ventured into a tech world, whereafter she'll take what she's learned back to the wild to help her fellow conservationists and fellow wildlings. 15% of each image sold will go directly to Kilo9.</p>
            </div>
            {/*    */}

            <div className='artist__4'> {/* cath */}
                <Card style={{ backgroundColor: "#1E1E1E", width: "135px", height: "160px" }}>
                    <CardActionArea style={{ width: "135px", fontSize: "14px" }}>
                        <img src={cathan} className="artist__image" style={{ height: "160px", margin: "none" }} />
                    </CardActionArea>
                </Card>
                <Typography gutterBottom variant="h6" style={{ color: "black", textAlign: "left", marginLeft: "-10px" }} >
                    Cathan Moore
                </Typography>
                <p className='artist__11' style={{ width: "170px", fontSize: "12px", marginLeft: "-18px" }}>As a young boy he grew up in the bush among the wildlife in one of South Africa's greatest nature reserves - Timbavati<br></br> Recently he received an international award for photography – a passion he developed after spending countless hours in the wild. Cathan Moore (18) was announced the winner of the Youth in Africa category at the Benjamin Mkapa African Wildlife Photography Awards that were held in Nairobi, Kenya on October 28. The competition received thousands of entries and was named to honour the late former president of Tanzania, Benjamin Mkapa. Moore wants to use his skills as a wildlife photographer to pay back the gift that growing up in nature has given him, by contributing to conservation through his camera lens.</p></div>

        </div>

    )
}

export default Artists;