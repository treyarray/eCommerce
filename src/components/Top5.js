import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
  {   
    url: 'https://cdn.shopify.com/s/files/1/1252/4641/products/Black_a4828b22-2fe3-4d23-a41b-90252caad20a.jpg?v=1613048581',
    title: 'Solid Pack of 9: Half Sleeves Crew Neck',
    width: '20%',
  }, 
  {
    url: 'https://cdn.shopify.com/s/files/1/1252/4641/products/Black_e1592ec5-df99-4253-bb42-30edf29ce40c.jpg?v=1631106287',
    title: 'Solid Pack of 6: Half Sleeves Crew Neck',
    width: '20%',
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/1252/4641/products/Wine_2ee7022a-ff4a-4bbb-94cd-3b97dcc65754_720x.jpg?v=1631106292',
    title: 'Solid Pack of 9: Half Sleeves Crew Neck',
    width: '20%',
  },
  { 
    url: 'https://cdn.shopify.com/s/files/1/1252/4641/products/Full-Pink2_1024x1024_8b568f56-c221-4000-aeed-857768431dba_720x.jpg?v=1631106292',
    title: 'Solid Pack of 5: Half Sleeves Crew Neck',
    width: '20%',
  },
  {
    url: 'https://cdn.shopify.com/s/files/1/1252/4641/products/Solid-Packfull-Chocolate_6ec5c7c4-83c3-40cd-bbc1-27318653535e_720x.jpg?v=1632910400',
    title: 'Solid Pack of 4: Half Sleeves Crew Neck',
    width: '20%',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function Bc() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
