import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 10000,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Shipping() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid direction="row" justifyContent="center" alignItems="center" spacing={3} container>
                <Grid item xs={12} lg={6}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Shipping Address :"+" "+"hello"} />
                        </ListItem>
                        <ListItem button>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Email "+" sherwin@gmail.com"} />
                        </ListItem>
                    </List>
                </Grid>
                    <Divider />
                <Grid item xs={12} lg={6}>
                    <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem button>
                        <ListItemText primary="To Continue," />
                        </ListItem>
                        <ListItemLink href="#simple-list">
                        <ListItemText primary="Move to next page for the payment or return back to change the shipping address" />
                        </ListItemLink>
                    </List>
                    </Grid>
              </Grid>
    </div>
  );
}
