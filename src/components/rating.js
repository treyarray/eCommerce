import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff3d47',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

export default function Ratings(props) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rating</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={props.value}
          icon={<FavoriteIcon fontSize="inherit" />}
          readOnly
        />
      </Box>
    </div>
  );
}
