import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';


const Item =(props) => {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };

  export default Item;