import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import AllMen from "./allMen";
import { useState } from "react";
import clsx from 'clsx';
import { Container } from "@material-ui/core";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SearchIcon from '@material-ui/icons/Search';
import Fab from '@material-ui/core/Fab';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

function MainMen(props) {
  const { window } = props;
  const classes = useStyles();
  const [state, setState] = React.useState({ 
    bottom: false,
  }); 
  
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [ope, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!ope);
  };

  const [Page, setPage] = useState(1);

  function Determine(){
    
        if (Page==1){
          return <AllMen/>
        }
  
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className={clsx(classes.list, {
      [classes.fullList]: anchor === 'bottom',
    })}
    role="presentation"
    >
      <footer className={classes.footer}>
        <Container maxWidth="sm">
        <Divider />
      <List>
        <ListItem button>
          <ListItemText primary={"Filters"} />
        </ListItem>
      </List>
      <Divider />
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <CategoryRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Category" />
        {ope ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={ope} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button onClick={()=>{console.log(2)}} className={classes.nested}>
            <ListItemText style={{marginLeft:"76px"}} primary="Hoodie" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText style={{marginLeft:"76px"}} primary="Sleeveless" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText style={{marginLeft:"76px"}} primary="Sweat Shirt" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText style={{marginLeft:"76px"}} primary="T-Shirt" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText style={{marginLeft:"76px"}} primary="Full Sleeves" />
          </ListItem>
        </List>
      </Collapse>
        </Container>
      </footer>
    </div>
  )

return (
  <div>
      <React.Fragment>
        <Determine/>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Fab onClick={toggleDrawer('bottom', true)} color="secondary" aria-label="add" className={classes.fabButton}>
          <SearchIcon />
          </Fab>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
        <SwipeableDrawer
          anchor={'bottom'}
          open={state['bottom']}
          onClose={toggleDrawer('bottom', false)}
          onOpen={toggleDrawer('bottom', true)}
        >
          {list('bottom')}
        </SwipeableDrawer>
      </React.Fragment>   
  </div>
  );
}

MainMen.propTypes = {
  window: PropTypes.func
};

export default MainMen;
