import React from 'react'
import { useHistory } from 'react-router';
import Nav from './Nav';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Sc from './Scard';
import Footer from './Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../firebase-config';
import {collection,getDocs} from "firebase/firestore";

export default function AllMen() {
    const [product, setproduct] = useState([]);
    const productCollectionRef=collection(db,"japanese X indie");

    useEffect(() => {
      const getProducts= async ()=>{
          const data = await getDocs(productCollectionRef);
          console.log(data);
          setproduct(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
      }
      getProducts();
    }, []);

    return (
      <div>
      <Nav/>
      <Container fixed>
        <br/>
        <br/>
        <Grid direction="row" justify="center" alignItems="center" container spacing={1}>
          {
            product.map(i => (
                  <Grid item xs={6} lg={4}>
                    <Sc content={i} image={i.mainImage} price={i.price} name={i.name} duplicatePrice={i.DuplicatePrice} />
                  </Grid>
          ))}
        </Grid>
        <br/>
        <br/>
      </Container>
    </div>
    )
}