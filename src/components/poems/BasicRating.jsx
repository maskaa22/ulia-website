import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { updatePoem } from '../../actions/user';


export default function BasicRating({id, rating}) {
  const [value, setValue] = React.useState(rating);

  return (
    <Box>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          updatePoem(id, newValue)
        }}
      /> 
    </Box>
  );
}