import React from 'react';
import Axios from 'axios';
import '../scss/adminPage.scss';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
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
import axios from 'axios';


// TABLE
function createData(name, TotalPrice, Quantity) {
    return {
        name,
        TotalPrice,
        Quantity,
        history: [
            {
                date: '2022-09-00',
                Item: 'The Lion Lick',
                amount: 6,
                price: 3000
            },
            {
                date: '2022-09-00',
                Item: 'Nyeleti',
                amount: 7,
                price: 3000
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
                <TableCell align="right">{row.TotalPrice}</TableCell>
                <TableCell align="right">{row.Quantity}</TableCell>
                <TableCell align="right">{row.Address}</TableCell>
                <TableCell>
                    <IconButton onClick={() => { alert("Dispatched!") }}>
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
                                        <TableCell>Item Name</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell align="right">Item quantity</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                        <TableCell align="right">Date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.Item}
                                            </TableCell>
                                            <TableCell>{historyRow.price}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.price * historyRow.amount)}
                                            </TableCell>
                                            <TableCell align="right">{historyRow.date}</TableCell>
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
        name: PropTypes.number.isRequired,
        TotalPrice: PropTypes.number.isRequired,
        Quantity: PropTypes.number.isRequired,
        Address: PropTypes.string.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                totalPrice: PropTypes.number.isRequired,
                Item: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};
// TABLE
const rows = [
    createData('Shanre', 39000, 6, 'The way home'),

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

    const [products, setProducts] = useState([]);
    const [gatherRenderedProductInfo, setGatherRenderedProductInfo] = useState(false);


    const deleteProduct = (id, name) => {
        console.log("Delete Product ", id);
        if (window.confirm("Are you sure you want to delete: " + name) === true) {
            axios.delete('http://localhost:5000/product/' + id).then(res => {
                console.log(res);
                setGatherRenderedProductInfo(true)
            })

        }
    }

    useEffect(() => {

        Axios.get('http://localhost:5000/products').then(res => {

            let data = res.data;
            console.log(data);
            const photoItem = data.map((item) =>
                <ImageListItem key={item._id} cols={1} rows={1}>

                    {console.log("Image", "http://localhost:5000/wildlifeGalleryImages/" + item.image)}
                    <img
                        {...srcset("http://localhost:5000/wildlifeGalleryImages/" + item.image, 300, 100, 1, 1)}
                        alt={item.name}
                        loading="lazy"
                        style={{ borderRadius: "8px" }} />
                    <ImageListItemBar style={{ borderRadius: "8px" }}
                        sx={{
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        title={item.name}
                        position="top"
                        actionIcon={
                            // Hoekom werk dit?!?!?!?!? Daai onClick met => function
                            <Button variant="outlined" onClick={() => { deleteProduct(item._id, item.name) }} startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                        }
                        actionPosition="left"
                    />
                </ImageListItem>
            );
            console.log(photoItem);
            setProducts(photoItem)
            // setGatherProductInfo(photoItem)
            // om 'n infinite loop te stop
            setGatherRenderedProductInfo(false)

        })
    }, [gatherRenderedProductInfo])

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

    const handleSubmit = () => {
        const payloadData = new FormData()
        var myDate = Date.now()
        // console.log(myDate);

        let price1 = addProduct.price
        let price2 = Math.round(addProduct.price / 1.8)
        let price3 = Math.round(price2 - 170)

        let payload = {
            date: myDate,
            name: addProduct.name,
            description: addProduct.description,
            price: { v0: price1, v1: price2, v2: price3 },
            discount: addProduct.discount,
            printMedium:
                { v0: "Stretched Canvas", v1: "Loose Canvas", v2: "Matte Fine Art Paper" },
            artist: addProduct.artist,
            size: { v0: "A1 - 594 x 841 mm", v1: "A2 - 420 x 594 mm", v2: "A3 - 297 x 420 mm" },
            category: addProduct.category,
            stock: addProduct.stock
        }

        payloadData.append("information", JSON.stringify(payload));

        payloadData.append("image", newProductImage);

        // console.log(JSON.stringify(payloadData);

        Axios.post('http://localhost:5000/product', payloadData).then(() => {
            setGatherRenderedProductInfo(true)

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

    };


    return (
        <div className='adminpage'>
            {/* GALLERY STOCK */}
            <div className='adminpage__ingallery'>
                <div className='adminpage__ingallery__addbtn'>
                    <p>Admin, here you can add a new image with ease! Just click the Add Button!</p>
                    <IconButton variant="contained" style={{ width: "200px", height: "40px", borderRadius: "10px", padding: "10px" }} onClick={handleClickOpen}>
                        <Typography variant="p" component="div" className='adminpage__ingallery__addbtn__add'>
                            add new product
                        </Typography>
                        <AddPhotoAlternateRoundedIcon fontSize="large" />
                    </IconButton>
                </div>

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
                    rowHeight={100}
                    gap={15}>

                    {products}
                </ImageList>
            </div>


            {/* TABLE */}
            <div className='adminpage__orders'>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Name</TableCell>
                                <TableCell align="right">TotalPrice</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Address</TableCell>
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


export default AdminPage;