import React from 'react';
import Axios from 'axios';
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
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Alert, ButtonGroup } from '@mui/material';
import { width } from '@mui/system';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useNavigate } from 'react-router-dom';


function createData(id, name, activePrice, discount, baseDiscount, price1, price2, price3, artist, quantity, activeSize, size1, size2, size3, activePrintMedium, printMedium1, printMedium2, printMedium3, image) {
    return {
        id,
        name,
        activePrice,
        discount,
        baseDiscount,
        price1,
        price2,
        price3,
        artist,
        quantity,
        activeSize,
        size1,
        size2,
        size3,
        activePrintMedium,
        printMedium1,
        printMedium2,
        printMedium3,
        image
    };
}



const CartPage = () => {

    let navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [gatherRenderedProductInfo, setGatherRenderedProductInfo] = useState(false);

    let currentCart = sessionStorage.getItem("productCart")
    // console.log(currentCart);
    const [product, setProduct] = useState({});
    const [image, setImage] = useState();
    const [rows, setRows] = useState([]);

    const [totalPrice, setTotalPrice] = useState(0);




    // TABLE
    function Row(props) {
        const { row } = props;
        let id = row.id

        const [size, setSize] = useState(row.activeSize);
        const [printMedium, setprintMedium] = useState(row.activePrintMedium);
        const [price, setPrice] = useState(row.activePrice);
        const [quantity, setQuantity] = useState(row.quantity)

        function getPrice(quantity, activeSize, discount, price1, price2, price3) {
            let activePrice = 0
            if (activeSize == "A1 - 594 x 841 mm") {
                activePrice = price1 * quantity

            }
            if (activeSize == "A2 - 420 x 594 mm") {
                activePrice = price2 * quantity
            }
            if (activeSize == "A3 - 297 x 420 mm") {
                activePrice = price3 * quantity
            }
            let discounPrice = discount * quantity
            return activePrice - discounPrice
        }

        function getDiscount(quantity, discount) {
            let discounPrice = discount * quantity
            console.log(discounPrice);
            return discounPrice
        }

        function getTotalPrice() {
            let totalPrice = 0
            for (let i = 0; i < rows.length; i++) {
                const element = rows[i];
                console.log(element.id);
                totalPrice = totalPrice + element.activePrice
            }

            setTotalPrice(totalPrice)
            console.log(totalPrice);
        }

        const deleteProduct = (id, name) => {
            let tempRows = []

            // setRows([])

            console.log("Delete Product ", id);
            let currentStockInSession = JSON.parse(sessionStorage?.getItem("productCart"));
            // sessionStorage.clear();
            console.log(currentStockInSession);
            let deletePro = 0;
            for (let i = 0; i < currentStockInSession.length; i++) {
                const element = currentStockInSession[i];
                if (id == element.productId) {
                    console.log("Match found!");
                    deletePro = i;
                }
            }
            currentStockInSession.splice(deletePro, 1);
            sessionStorage.setItem('productCart', JSON.stringify(currentStockInSession));
            for (let i = 0; i < rows.length; i++) {
                const element = rows[i];
                console.log(element.id);
                if (id == element.id) {
                    console.log("Match row found!", element.id);
                }
                else {
                    tempRows.push(element)
                }
            }
            console.log(tempRows);

            setRows(tempRows)
            getTotalPrice()
        }

        const increaseProduct = (id, name) => {
            console.log("increase Product ", id);
            let currentStockInSession = JSON.parse(sessionStorage?.getItem("productCart"));
            // sessionStorage.clear();
            console.log(currentStockInSession);

            for (let i = 0; i < currentStockInSession.length; i++) {
                const element = currentStockInSession[i];
                if (id == element.productId) {
                    console.log("Match found!");
                    element.quantity = element.quantity + 1
                    setQuantity(element.quantity)
                    row.quantity = element.quantity

                }

            }
            sessionStorage.setItem('productCart', JSON.stringify(currentStockInSession));
            console.log(JSON.parse(sessionStorage?.getItem("productCart")));
            let tempRows = []

            for (let i = 0; i < rows.length; i++) {
                let element = rows[i];
                console.log(element);
                if (id == element.id) {
                    console.log("Match row found!", element.id);
                    element.activePrice = getPrice(element.quantity, element.activeSize, element.baseDiscount, element.price1, element.price2, element.price3)
                    element.discount = getDiscount(element.quantity, element.baseDiscount)
                    tempRows.push(element)
                }
                else {
                    tempRows.push(element)
                }
            }
            console.log(tempRows);

            setRows(tempRows)
            getTotalPrice()

            // setGatherRenderedProductInfo(true)
        }


        const decreaseProduct = (id, name) => {
            console.log("decrease Product ", id);
            let currentStockInSession = JSON.parse(sessionStorage?.getItem("productCart"));
            // sessionStorage.clear();
            // console.log(currentStockInSession);
            let tempRows = []

            let deletePro = 0;

            for (let i = 0; i < currentStockInSession.length; i++) {
                const element = currentStockInSession[i];
                if (id == element.productId) {
                    element.quantity = element.quantity - 1
                    if (element.quantity == -1) {
                        element.quantity = 0
                    }
                    setQuantity(element.quantity)
                    row.quantity = element.quantity
                }
            }
            sessionStorage.setItem('productCart', JSON.stringify(currentStockInSession));
            console.log(JSON.parse(sessionStorage?.getItem("productCart")));

            for (let i = 0; i < rows.length; i++) {
                let element = rows[i];
                console.log(element);
                if (id == element.id) {
                    console.log("Match row found!", element.id);
                    element.activePrice = getPrice(element.quantity, element.activeSize, element.baseDiscount, element.price1, element.price2, element.price3)
                    element.discount = getDiscount(element.quantity, element.baseDiscount)
                    tempRows.push(element)

                }
                else {
                    tempRows.push(element)
                }


            }
            console.log(tempRows);

            setRows(tempRows)
            getTotalPrice()
        }
        const handleChange = (event: SelectChangeEvent) => {
            console.log(event.target);
            if (event.target.name == "size") {
                row.activeSize = event.target.value
                setSize(row.activeSize)
            }
            if (event.target.name == "printMedium") {
                row.activePrintMedium = event.target.value
                setprintMedium(row.activePrintMedium)
            }
            let currentStockInSession = JSON.parse(sessionStorage?.getItem("productCart"));
            // sessionStorage.clear();
            console.log(currentStockInSession);

            for (let i = 0; i < currentStockInSession.length; i++) {
                const element = currentStockInSession[i];
                if (row.id == element.productId) {
                    console.log("Match found!");

                    // currentStockInSession.size = size
                    // currentStockInSession.printMedium = row.activePrintMedium
                    console.log(size);
                    console.log(currentStockInSession.size);
                    console.log(row.activeSize);
                    if (row.activeSize == "A1 - 594 x 841 mm") {
                        row.activePrice = row.price1 * row.quantity
                        element.size = 1
                        setPrice(row.activePrice)
                    }
                    if (row.activeSize == "A2 - 420 x 594 mm") {
                        row.activePrice = row.price2 * row.quantity
                        element.size = 2
                        setPrice(row.activePrice)

                    }
                    if (row.activeSize == "A3 - 297 x 420 mm") {
                        row.activePrice = row.price3 * row.quantity
                        element.size = 3
                        setPrice(row.activePrice)
                    }

                    if (row.activePrintMedium == "Stretched Canvas") {
                        element.printMedium = 1
                    }
                    if (row.activePrintMedium == "Loose Canvas") {
                        element.printMedium = 2

                    }
                    if (row.activePrintMedium == "Matte Fine Art Paper") {
                        element.printMedium = 3
                    }
                    console.log(row.activePrintMedium);

                }

            }
            console.log(currentStockInSession);
            sessionStorage.setItem('productCart', JSON.stringify(currentStockInSession));
            console.log(JSON.parse(sessionStorage?.getItem("productCart")));
            getTotalPrice()

        };


        return (
            // table
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                    <TableCell><img src={row.image} alt={row.name} style={{ width: "100px" }}></img></TableCell>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">R{row.activePrice}</TableCell>
                    <TableCell align="right">R{row.discount}</TableCell>

                    <TableCell align="right">{row.artist}</TableCell>
                    <TableCell align="right"><IconButton aria-label="increase" color="primary" onClick={() => { increaseProduct(row.id) }}>
                        <AddIcon />
                    </IconButton>{row.quantity}<IconButton aria-label="decrease" color="primary" onClick={() => { decreaseProduct(row.id) }}>
                            <RemoveIcon />
                        </IconButton></TableCell>
                    <TableCell align="right"><InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                            labelId="Size"
                            id="demo-simple-select"
                            value={row.activeSize}
                            label="Size"
                            name="size"
                            onChange={handleChange}
                        >
                            <MenuItem value={row.size1}>{row.size1}</MenuItem>
                            <MenuItem value={row.size2}>{row.size2}</MenuItem>
                            <MenuItem value={row.size3}>{row.size3}</MenuItem>
                        </Select></TableCell>

                    <TableCell align="right"><InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={row.activePrintMedium}
                            label="printMedium"
                            name="printMedium"
                            onChange={handleChange}
                        >
                            <MenuItem value={row.printMedium1}>{row.printMedium1}</MenuItem>
                            <MenuItem value={row.printMedium2}>{row.printMedium2}</MenuItem>
                            <MenuItem value={row.printMedium3}>{row.printMedium3}</MenuItem>
                        </Select></TableCell>

                    <TableCell>
                        <IconButton aria-label="delete" color="primary" onClick={() => { deleteProduct(row.id) }}>
                            <DeleteIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>

            </React.Fragment>
        );
    }
    // TABLE
    Row.propTypes = {
        row: PropTypes.shape({
            name: PropTypes.string.isRequired,
            activePrice: PropTypes.number.isRequired,
            discount: PropTypes.number.isRequired,
            price1: PropTypes.number.isRequired,
            price2: PropTypes.number.isRequired,
            price3: PropTypes.number.isRequired,
            artist: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            activeSize: PropTypes.string.isRequired,
            size1: PropTypes.string.isRequired,
            size2: PropTypes.string.isRequired,
            size3: PropTypes.string.isRequired,
            activePrintMedium: PropTypes.string.isRequired,
            printMedium1: PropTypes.string.isRequired,
            printMedium2: PropTypes.string.isRequired,
            printMedium3: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
        }).isRequired,
    };

    // GALLERY STOCK COMPONENT
    function srcset(image, width, height, rows = 2, cols = 4) {
        return {
            src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${width * cols}&h=${height * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }





    useEffect(() => {
        let currentStockInSession = JSON.parse(sessionStorage?.getItem("productCart"));
        // sessionStorage.clear();
        console.log(currentStockInSession);
        let items = []
        // setRows([])
        let totalPrice = 0
        currentStockInSession?.forEach(el => {
            // console.log(el);

            Axios.get('http://localhost:5000/product/' + el.productId)
                .then(res => {

                    let data = res.data;
                    console.log(data);
                    let row = []
                    row = ({
                        key: data._id,
                        id: data._id,
                        description: data.description,
                        name: data.name,
                        price: {
                            v0: data.price.v0,
                            v1: data.price.v1,
                            v2: data.price.v2
                        },
                        discount: data.discount,
                        baseDiscount: data.discount,
                        printMedium: {
                            v0: data.printMedium.v0,
                            v1: data.printMedium.v1,
                            v2: data.printMedium.v2
                        },
                        size: {
                            v0: data.size.v0,
                            v1: data.size.v1,
                            v2: data.size.v2
                        },
                        artist: data.artist,
                        category: data.category,
                        stock: data.stock,
                    })
                    let URL = 'http://localhost:5000/wildlifeGalleryImages/' + data.image;
                    setImage(URL);
                    // console.log(row);

                    let activeSize = 0
                    let activePrintMedium = 0
                    let activePrice = 0

                    if (el.size == 1) {
                        activePrice = row.price.v0
                        activeSize = row.size.v0
                    }
                    if (el.size == 2) {
                        activePrice = row.price.v1
                        activeSize = row.size.v1
                    }
                    if (el.size == 3) {
                        activePrice = row.price.v2
                        activeSize = row.size.v2
                    }
                    if (el.printMedium == 1) {
                        activePrintMedium = row.printMedium.v0
                    }
                    if (el.printMedium == 2) {
                        activePrintMedium = row.printMedium.v1
                    }
                    if (el.printMedium == 3) {
                        activePrintMedium = row.printMedium.v2
                    }

                    activePrice = activePrice * el.quantity
                    let discount = row.discount * el.quantity
                    totalPrice = totalPrice + activePrice

                    console.log(totalPrice)
                    setTotalPrice(totalPrice)

                    items.push(createData(row.id, row.name, activePrice, discount, row.discount, row.price.v0, row.price.v1, row.price.v2, row.artist, el.quantity, activeSize, row.size.v0, row.size.v1, row.size.v2, activePrintMedium, row.printMedium.v0, row.printMedium.v1, row.printMedium.v2, URL))
                })
            setRows(items)
            // console.log(items);
            setGatherRenderedProductInfo(false)

        });
    }, [gatherRenderedProductInfo]);




    return (
        <div className='cart'>

            <div className='orderTable'>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">Final Price</TableCell>
                                <TableCell align="right"> - Discount</TableCell>
                                <TableCell align="right">Artist</TableCell>
                                <TableCell align="right">Quantity</TableCell>
                                <TableCell align="right">Size</TableCell>
                                <TableCell align="right">Print Medium</TableCell>
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

            <div>

            </div>

            <div style={{ bottom: "0", textAlign: "right", marginRight: "40px" }}>
                <h3>Total Price: R{totalPrice}</h3>

                <IconButton aria-label="Checkout" color="primary" onClick={() => { navigate('/buypage'); }}>
                    <ShoppingBagIcon /> Checkout
                </IconButton>
            </div>

        </div>
    );
}
export default CartPage;