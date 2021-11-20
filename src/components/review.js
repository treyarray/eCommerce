import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Grid, Typography,Avatar} from '@material-ui/core';
import Ratings from './rating';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(50),
      height: theme.spacing(50),
    },
  },
}));

export default function Reviews(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={5} >
            <br/>
            <br/>
            <Avatar style={{marginLeft:"30px",marginRight:"30px"}}>H</Avatar>
            <br/>
            <Typography style={{textAlign:"center"}}>Lorem ipsum</Typography>
            <br/>
            <Typography style={{textAlign:"left",marginLeft:"30px",marginRight:"30px"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"</Typography>
            <br/>
            <br/>
            <Ratings value={props.value}/>
      </Paper>
    </div>
  );
}
