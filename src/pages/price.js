import React from 'react'
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router';
import { Typography,ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';
import Nav from "../components/Nav";
import PriceCard from "../components/priceHard";
import Colour from '../components/COLOUR';

export default function Price() {

    const history = useHistory();
    const [Quantity,setQuantity] = useState(1);
    const [Item, setItem] = useState("");

    function increase(){
        setQuantity(pre=>pre+1)
    }

    function reset(){
      setQuantity(0);
    }

    function decrease(){
        if (Quantity===0){
            
        }else{
            setQuantity(pre=>pre-1)
        }
    }

    useEffect(() => {
      setItem(JSON.parse(window.localStorage.getItem("Items")));
    }, []);

    return (
      <>
      <Nav/>
      <Container fixed>
            <br/>
            <br/>
            <Grid direction="row" justifyContent="flex-start" alignItems="flex-start"  container>
                <Grid item xs={12} md={6} lg={6}>
                  <PriceCard/>                
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                <br/>
                <br/>
                  <Typography style={{textAlign:"left",marginLeft:"40px"}} color="primary" variant="h2">{Item.name}</Typography>
                  <br/>
                  <Typography  style={{textAlign:"left",marginLeft:"40px"}} variant="h4">{Item.price}</Typography>
                  <br/>
                  <Typography style={{textAlign:"left",marginLeft:"40px"}} variant="h5">size</Typography>
                  <Typography style={{textAlign:"left",marginLeft:"40px"}} variant="h5">
                  <ButtonGroup color="primary" size="large" aria-label="small outlined button group">
                    {Item.S ? <Button>S</Button> : null}
                    {Item.M ? <Button>M</Button> : null}
                    {Item.L ? <Button>L</Button> : null}
                    {Item.XL ? <Button>XL</Button> : null}
                    {Item.XXL ? <Button>XXL</Button> : null}
                  </ButtonGroup>
                  </Typography>
                  <br/>
                  <Grid direction="row" justifyContent="flex-start" alignItems="flex-start"  container>
                    <Grid item xs={4} lg={4}>
                    <Typography style={{textAlign:"left",marginLeft:"40px"}} variant="h5">
                    {Item.color1 ? <Colour color={Item.color1} /> : null}
                    </Typography>
                    </Grid>
                    <Grid item xs={4} lg={4}>
                    <Typography style={{textAlign:"left",marginLeft:"40px"}} variant="h5">
                    {Item.color2 ? <Colour color={"#f7f7f7"} /> : null}
                    </Typography>
                    </Grid>
                    <Grid item xs={4} lg={4}>
                    <Typography style={{textAlign:"left",marginLeft:"40px"}} variant="h5">
                    {Item.color3 ? <Colour color={Item.color3} /> : null}
                    </Typography>
                    </Grid>
                  </Grid>
                  
                  <br/>
                  <Typography style={{textAlign:"left",marginLeft:"40px"}} variant="h5">Quantity</Typography>
                  <Typography style={{textAlign:"left",marginLeft:"40px"}} variant="h5">
                  <ButtonGroup color="secondary" variant="contained" size="small" aria-label="small outlined button group">
                    <Button onClick={increase}>+</Button>
                    <Button onClick={reset}>{Quantity}</Button>
                    <Button onClick={decrease}>-</Button>
                  </ButtonGroup>
                  </Typography>
                  <br/>
                  <Typography style={{textAlign:"left",marginLeft:"40px"}} ><Button style={{"borderRadius":"5em"}} color="primary" variant="outlined">Add to Cart</Button></Typography>
                  <br/>
                  <Typography style={{textAlign:"left",marginLeft:"40px"}} ><Button onClick={()=> history.push("/billing")} style={{"borderRadius":"5em"}} color="secondary" variant="contained">Buy Now</Button></Typography>
                </Grid>
            </Grid>
            <br/>
            <hr/>
            <br/>
            <Grid direction="row" justifyContent="flex-start" alignItems="flex-start"  container>
                <Grid item xs={12} lg={6}>
                <Typography style={{"textAlign":"left"}}  variant="h5">Description</Typography>
                <Typography style={{"textAlign":"left"}}  >{Item.material}</Typography>
                </Grid>
            </Grid>
            <br/>
            <hr/>
            <br/>
      </Container>
      <Footer/>
      </>
    )
}