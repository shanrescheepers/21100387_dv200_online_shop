import React from 'react';
import Axios from 'axios';
import '../scss/adminPage.scss';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';


// TABLE
function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700',
                amount: 3,
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous',
                amount: 1,
            },
        ],
    };
}
// TABLE
function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
        // table
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell>
                    <IconButton>
                        <LocalShippingRoundedIcon></LocalShippingRoundedIcon>
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
// TABLE
Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};
// TABLE
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];

// GALLERY STOCK COMPONENT
function srcset(image, width, height, rows = 2, cols = 4) {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}


export function AdminPage() {

    const [addProduct, setAddProduct] = useState({
        description: '',
        imgUrl: '',
        name: '',
        price: '',
        artist: '',
        category: '',
        stock: '',
        discount: ''
    })

    const [open, setOpen] = useState(false);
    // dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const handleSubmit = () => {
        let placeholderProduct = new FormData()
        placeholderProduct.append("product info", JSON.stringify(addProduct));
        placeholderProduct.append("image", newProductImage)
        console.log(newProductImage)

        Axios.post('http://localhost:5000/product', placeholderProduct).then(() => {
            setOpenSnackbar(true)
        }).catch(err => {
            alert(err)
        }).finally(() => {
            setOpen(false)
        });
    }

    const handleAddedNewProductChange = (event) => {
        const value = event.target.value;
        setAddProduct({
            ...addProduct,
            [event.target.name]: value
        });

        // setStindee({
        //   ...account,
        //   profile: {
        //     ...profile
        //   }
        // })
    };
    const [newProductImage, setNewProductImage] = useState()
    const [imageName, setImagename] = useState("upload image")

    const getImage = (e) => {
        let imageFile = e.target.files[0];
        setNewProductImage(imageFile);
        let value = e.target.value;
        let imageName = value.substring(12);
        setImagename(imageName);
        let reader = new FileReader();
        reader.onload = () => {
            let output = document.getElementById('imagePreview');
            output.src = reader.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    const [openSnackbar, setOpenSnackbar] = React.useState(false);

    return (
        <div className='adminpage'>
            {/* GALLERY STOCK */}
            <div className='adminpage__ingallery'>
                <span className='adminpage__ingallery__addbtn'>

                    <IconButton variant="contained" style={{ width: "200px", height: "40px", borderRadius: "10px", padding: "10px" }} onClick={handleClickOpen}>
                        <Typography variant="p" component="div" className='adminpage__ingallery__addbtn__add'>
                            add new product
                        </Typography>
                        <AddPhotoAlternateRoundedIcon fontSize="large" />
                    </IconButton></span>

                <Dialog open={open} onClose={handleClose} >

                    <DialogContent>
                        <DialogTitle>Gallery Item Details</DialogTitle>
                        {/* imgurl */}
                        <Stack direction="row" alignItems="center" spacing={4}>
                            <img id="imagePreview" style={{ height: "200px", width: "200px" }} />
                            <Typography variant="p" >
                                {imageName}
                            </Typography>
                            <Button variant="contained" component="label">
                                Upload
                                <input onChange={getImage} hidden accept="image/*" multiple type="file" style={{ padding: "8px" }} />
                                <PhotoCamera style={{ paddingLeft: "8px" }} />
                            </Button>
                        </Stack>
                        {/* description */}
                        <TextField
                            margin="normal"
                            name="description"
                            label="description"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.description}
                            onChange={handleAddedNewProductChange}
                        />

                        {/* name */}
                        <TextField
                            margin="normal"
                            name="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.name}
                            onChange={handleAddedNewProductChange}
                        />
                        {/* price */}
                        <TextField
                            margin="normal"
                            name="price"
                            label="price"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.price}
                            onChange={handleAddedNewProductChange}
                        />


                        {/* artist */}
                        <TextField
                            margin="normal"
                            name="artist"
                            label="artist"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.artist}
                            onChange={handleAddedNewProductChange}
                        />
                        {/* category */}
                        <TextField
                            margin="normal"
                            name="category"
                            label="category"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.category}
                            onChange={handleAddedNewProductChange}
                        />
                        {/* stock */}
                        <TextField
                            margin="normal"
                            name="stock"
                            label="stock"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.stock}
                            onChange={handleAddedNewProductChange}
                        />
                        {/* discount */}
                        <TextField
                            margin="normal"
                            name="discount"
                            label="discount"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={addProduct.discount}
                            onChange={handleAddedNewProductChange}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </DialogActions>
                </Dialog>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={2000}
                    onClose={() => setOpenSnackbar(false)}
                    message="Product Added!"
                />
                <ImageList
                    sx={{
                        width: 900,
                        height: 750,
                        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                        transform: 'translateZ(0)',
                    }}
                    rowHeight={200}
                    gap={8}>

                    {itemData.map((item) => {
                        const cols = item.featured ? 2 : 1;
                        const rows = item.featured ? 2 : 1;

                        return (
                            <ImageListItem key={item.img} cols={cols} rows={rows}>
                                <img
                                    {...srcset(item.img, 300, 100, rows, cols)}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ borderRadius: "8px" }} />
                                <ImageListItemBar style={{ borderRadius: "8px" }}
                                    sx={{
                                        background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                    }}
                                    title={item.title}
                                    position="top"
                                    actionIcon={
                                        <IconButton>
                                            <AddPhotoAlternateRoundedIcon />
                                        </IconButton>
                                    }
                                    actionPosition="left"
                                />
                            </ImageListItem>
                        );
                    })}
                </ImageList>
            </div>


            {/* TABLE */}
            <div className='adminpage__orders'>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <Row key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>

    )
}
const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
    },
];

export default AdminPage;