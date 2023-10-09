

import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid, Box, Typography } from '@mui/material';

function Or() {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <Grid item sx={{
      justifyContent: 'center',
      width: '100%',
      alignItems: 'center',
      height: '40px',
      paddingRight: isMobile ? '10px' : '50px', // Added conditional paddingRight
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', }}>
        {isMobile ? (
          <>
            <Box sx={{ flex: 1, height: '1.3px', background: '#D1B298' }} />
            <Typography
              variant="body1"
              sx={{
                padding: '0 15px 0 15px',
                color: '#000',
                fontFamily: 'Montagu Slab',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '700',
              }}
            >
              or
            </Typography>
            <Box sx={{ flex: 1, height: '1.3px', background: '#D1B298' }} />
          </>
        ) : (
          <>
            <Typography
              variant="body1"
              sx={{
                padding: '0 15px 0 5px',
                color: '#000',
                fontFamily: 'Montagu Slab',
                fontSize: '20px',
                fontStyle: 'normal',
                fontWeight: '700',
              }}
            >
              or
            </Typography>
            <Box sx={{ flex: 1, height: '1.3px', background: '#D1B298' }} />
          </>
        )}
      </Box>
    </Grid>
  );
}

export default Or;
