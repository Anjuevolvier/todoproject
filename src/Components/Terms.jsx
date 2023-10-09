import React from 'react';
import { Box,  Typography} from '@mui/material';


 
  
  
  const Terms = () => {
    return (
      <Box>
        <Typography sx={{
            // maxwidth: '200.556px',
            // width:'100%',
            // height: '50.343px',
            flexShrink: '0',
            color: '#000',
            // textAlign: 'center',
            fontFamily: 'Montagu Slab, sans-serif',
            fontSize: '11px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            // marginLeft:'45px',
            // marginTop:'20px'
            
        }}>By signing in you are agreeing to our{' '}

        <span>

           <span style={{ textDecoration: 'underline',fontSize: '11px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal', }}>Terms and Conditions &nbsp;</span>
        <span style={{ textDecorationLine: 'none',fontSize: '11px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal',}}>&</span>
        <span style={{ textDecorationLine: 'underline',fontSize: '11px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal', }}> Privacy Policy</span>
         </span></Typography>

      
        </Box>
        
    )
  }
  
  export default Terms