import React from 'react';
import { Box,  Typography, } from '@mui/material';
import {  Link } from "react-router-dom"

 const Links = () => {
  return (
    <Box>
    
    <Typography sx={{padding:{xs:'5px 0px 5px 40px',md:'0px 0px 0px 40px',lg:'20px 0px 20px 120px'},
      // marginTop:{xs:'20px',md:'45px'},
      //               marginLeft:{xs:'180px',md:'140px'},
                    color: '#000',
                    fontFamily:  'Montagu Slab, sans-serif',
                    fontSize: '15px',
                    fontStyle: 'normal',
                    fontWeight: {xs:'200',md:'400'},
                    lineHeight: 'normal',}}>
    New here? <Link to="/signup" style={{color: '#D56252',
                                        fontFamily:  'Montagu Slab, sans-serif',
                                        fontSize: '15px',
                                        fontStyle: 'normal',
                                        fontWeight:  {xs:'200',md:'400'},
                                        lineHeight: 'normal',}} >Signup</Link> Now.</Typography>
    </Box>
  )
}
export default Links
