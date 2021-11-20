import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 290,
    margin: "auto",
    transition: "0.9s",
    boxShadow: "0 10px 60px -12px rgba(0,0,0,0.70)",
    borderRadius:8
  },
  media: {
    height: 0,
    paddingTop: '120.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const setStorage = (p) => {
    console.log(p)
    window.localStorage.setItem("Items",JSON.stringify(p));
    history.push("/price");
  }

  return (
    <>
    <Card onClick={()=>{setStorage(props.content)}} className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Paella dish"
      />
    </Card>
    <Typography >{props.name}<Typography style={{"textDecoration":"line-through",color:"gray"}}>{props.duplicatePrice}</Typography></Typography>
    <Typography>{props.price}</Typography>
    </>
  );
}
