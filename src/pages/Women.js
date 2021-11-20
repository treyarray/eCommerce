import React from 'react'
import { useHistory } from 'react-router';
import Nav from '../components/Nav';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Sc from '../components/Scard';
import Footer from '../components/Footer';

export default function Women() {

  const array=[{title:"Hoodie",image:"https://cdn.shopify.com/s/files/1/1252/4641/collections/Tops_360x.jpg?v=1632330312"},
  {title:"Hoodie",image:"https://cdn.shopify.com/s/files/1/1252/4641/collections/Tops_360x.jpg?v=1632330312"},
  {title:"Hoodie",image:"https://cdn.shopify.com/s/files/1/1252/4641/collections/Tops_360x.jpg?v=1632330312"},
  {title:"Hoodie",image:"https://cdn.shopify.com/s/files/1/1252/4641/collections/Tops_360x.jpg?v=1632330312"},
  {title:"Hoodie",image:"https://cdn.shopify.com/s/files/1/1252/4641/collections/Tops_360x.jpg?v=1632330312"},
  {title:"Hoodie",image:"https://cdn.shopify.com/s/files/1/1252/4641/collections/Tops_360x.jpg?v=1632330312"},
  {title:"Hoodie",image:"https://cdn.shopify.com/s/files/1/1252/4641/collections/Tops_360x.jpg?v=1632330312"},
  {title:"Hoodie",image:"https://cdn.shopify.com/s/files/1/1252/4641/collections/Tops_360x.jpg?v=1632330312"},
  {title:"Hoodie",image:"https://cdn.shopify.com/s/files/1/1252/4641/collections/Tops_360x.jpg?v=1632330312"},
  {title:"Hoodie",image:"https://cdn.shopify.com/s/files/1/1252/4641/collections/Tops_360x.jpg?v=1632330312"},
  {title:"Hoodie",image:"https://cdn.shopify.com/s/files/1/1252/4641/collections/Tops_360x.jpg?v=1632330312"}]

    const history = useHistory();


    return (
      <div>
      <Nav/>
      <Container fixed>
        <br/>
        <br/>
        <Grid direction="row" justify="center" alignItems="center" container spacing={3}>
        <Grid item xs={12} lg={12}>
                    <Typography variant="h3">Hoodies</Typography> 
        </Grid>
          {
            array.map(i => (
                  <Grid item xs={12} lg={4}>
                    <Sc title={i.title} i={i.image}/>  
                  </Grid>
          ))}
          </Grid>
        <br/>
      </Container>
      <Footer/>
    </div>
    )
}