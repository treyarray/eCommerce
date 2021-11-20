import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { Grid,Typography } from '@material-ui/core';
import { useHistory } from 'react-router';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Drop() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="secondary"
        onClick={handleClick}
      >
        <Typography variant="h6">Women</Typography>
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <Grid direction="row" justifyContent="center" alignItems="center" spacing={3} container>
                <Grid item xs={4} lg={4}>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Sent mail" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Drafts" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Inbox" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Sent mail" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Drafts" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Inbox" />
                  </StyledMenuItem>
                </Grid>
                <Grid item xs={4} lg={4}>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Sent mail" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Drafts" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Inbox" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Sent mail" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Drafts" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Inbox" />
                  </StyledMenuItem>
                </Grid>
                <Grid item xs={4} lg={4}>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Sent mail" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Drafts" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Inbox" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Sent mail" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Drafts" />
                  </StyledMenuItem>
                  <StyledMenuItem onClick={()=>history.push("/women")}>
                    <ListItemText primary="Inbox" />
                  </StyledMenuItem>
                </Grid>
      </Grid>
      </StyledMenu>
    </div>
  );
}
