import React from 'react'
import { useHistory } from 'react-router';
import Nav from "../components/Nav"
import { Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import { Box } from '@material-ui/core';
import Top5 from "../components/Top5"
import HCard from "../components/HomeCard"
import Footer from '../components/Footer';
import Reviews from '../components/review';
import Heading from '../components/Heading';
import Banner from '../components/Banner';

export default function Home() {

    return (
      <div>
      <Nav/>
      <br/>
      <Banner/>
      <br/>
    <div style={{"backgroundColor":"#0C022F"}}>
    <Container fixed>
        <br/>
        <br/>
        <Grid direction="row" justifyContent="center" alignItems="center" spacing={0} container>
                <Grid item xs={12} lg={4}>
                <Typography color="secondary" variant="h5">Declutter</Typography>
                <Typography color="secondary" variant="h6">Shop one-of-a-kind treasuresand all of your favorite brands. </Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
                <Typography color="secondary" variant="h5">Declutter</Typography>
                <Typography color="secondary" variant="h6">Shop one-of-a-kind treasuresand all of your favorite brands. </Typography>
                </Grid>
                <Grid item xs={12} lg={4}>
                <Typography color="secondary" variant="h5">Declutter</Typography>
                <Typography color="secondary" variant="h6">Shop one-of-a-kind treasuresand all of your favorite brands. </Typography>
                </Grid>
            </Grid>
        <br/>
        <br/>
        </Container> 
    </div>
      <Container fixed>
      <br/>
      <br/>
      <Heading/>
      <br/>
      <Grid direction="row" justifyContent="center" alignItems="center" spacing={1} container>
                <Grid item xs={6} lg={3}>
                <HCard/>
                </Grid>
                <Grid item xs={6} lg={3}>
                <HCard/>
                </Grid>
                <Grid item xs={6} lg={3}>
                <HCard/>
                </Grid>
                <Grid item xs={6} lg={3}>
                <HCard/>
                </Grid>
      </Grid>
      <br/>
      <br/>
      <Heading/>
      <br/>
      <Grid direction="row" justifyContent="center" alignItems="center" spacing={1} container>
                <Grid item xs={6} lg={3}>
                <HCard/>
                </Grid>
                <Grid item xs={6} lg={3}>
                <HCard/>
                </Grid>
                <Grid item xs={6} lg={3}>
                <HCard/>
                </Grid>
                <Grid item xs={6} lg={3}>
                <HCard/>
                </Grid>
      </Grid>
      <br/>
      </Container>
      <Footer/>
    </div>
    )
}
