import React from 'react'
import { useHistory } from 'react-router';
import Nav from "../components/Nav"
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer';
import Billing from '../components/Billing';

export default function Payment() {

    return (
      <div>
      <Nav/>
    <Container fixed>
        <br/>
        <br/>
        <Billing/>
        <br/>
        <br/>
      </Container>
      <Footer/>
    </div>
    )
}
