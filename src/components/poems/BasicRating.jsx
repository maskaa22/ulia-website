import * as React from 'react';
import Rating from '@mui/material/Rating';
import { updatePoem } from '../../actions/user';


export default function BasicRating({id, rating}) {
  const [value, setValue] = React.useState(rating || 0);

  return (
    <Rating
      name={`rating-${id}`}
      value={value}
      sx={{ color: 'var(--accent)', '& .MuiRating-iconEmpty': { color: 'var(--line)' } }}
      onChange={(event, newValue) => {
        setValue(newValue);
        updatePoem(id, newValue)
      }}
    />
  );
}
