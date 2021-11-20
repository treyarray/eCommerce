import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MoreIcon from '@material-ui/icons/MoreVert';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import GroupWorkRoundedIcon from '@material-ui/icons/GroupWorkRounded';
import VpnKeyTwoToneIcon from '@material-ui/icons/VpnKeyTwoTone';
import CallIcon from '@material-ui/icons/Call';
import { useHistory } from 'react-router';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menus from "./Menus"
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [open, setOpen] = React.useState(false);

  const DialogTitle = withStyles()((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  
  function CustomizedDialogs() {
  
    return (
      <div>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              Cart
          </DialogTitle>
          <DialogContent dividers>
            <Typography color="primary" >Added to Cart</Typography>
            <Grid direction="row" justifyContent="center" alignItems="center" spacing={3} container>
                <Grid item xs={12} lg={6}>
                    
                </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }


  const classes = useStyles();
  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    Product Listings............................................
      <List>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={""} />
          </ListItem>
      </List>
      <Divider />
    </div>
  );

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    toggleDrawer('left', true);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuCloseJ = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    history.push("/join")
  };

  const handleMenuCloseA = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    history.push("/about")
  };

  const handleMenuCloseT = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    history.push("/manual")
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuCloseJ}><Typography>Cart</Typography></MenuItem>
      <MenuItem onClick={handleMenuCloseT}><Typography>WishList</Typography></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton onClick={()=>{history.push("/")}} aria-label="show 4 new mails" color="inherit">
          <Badge color="secondary">
            <HomeRoundedIcon style={{"color":"#fc5cd4","paddingTop":"4px"}} />
          </Badge>
          <Typography variant="h5" style={{"paddingLeft":"10px"}}>Home</Typography>
        </IconButton>
      </MenuItem>
      <MenuItem>
      <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={toggleDrawer('left', true)}
              color="inherit"
            >
            <Badge color="secondary">
                <StorefrontRoundedIcon style={{"color":"#fc5cd4","paddingTop":"4px"}} /> 
                <Typography variant="h5" style={{"paddingLeft":"10px"}}>Products</Typography>
            </Badge>
            </IconButton>    
      </MenuItem>
      <MenuItem>
        <IconButton onClick={()=>{history.push("/sign up")}} aria-label="show 11 new notifications" color="inherit">
          <Badge color="secondary">
            <GroupWorkRoundedIcon style={{"color":"#fc5cd4","paddingTop":"4px"}} />
          </Badge>
          <Typography variant="h5" style={{"paddingLeft":"10px"}}>Our Team</Typography>
        </IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <CallIcon style={{"color":"#fc5cd4"}} />
          <p style={{"paddingLeft":"10px"}}>Accessories</p>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
        <div style={{
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  }}>
        <img onClick={()=>history.push("/")} src="logo.png" style={{
    margin: "auto",
    textAlign: "center",
    "width": "190px",
    "height": "90px"
  }} alt="logo" />
      </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          </div>

          <IconButton onClick={handleClickOpen} aria-label="show 11 new notifications" color="inherit">
          <Badge color="secondary">
            <ShoppingCartIcon style={{"color":"#D8E9A8",paddingTop:"20px",paddingBottom:"20px"}} />
          </Badge>
        </IconButton>
        </Toolbar>
        
 
          <Menus/>

        
      </AppBar>
      <CustomizedDialogs/>
    </div>
  );
}
