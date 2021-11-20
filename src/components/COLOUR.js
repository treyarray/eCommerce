import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import PageviewIcon from '@material-ui/icons/Pageview';
import FormatColorFillSharpIcon from '@material-ui/icons/FormatColorFillSharp';

export default function Colour(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        pink: {
          color: props.color,
          backgroundColor: props.color,
        },
    }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.pink}>
        <FormatColorFillSharpIcon />
      </Avatar>
    </div>
  );
}
