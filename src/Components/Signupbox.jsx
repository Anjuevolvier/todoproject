import React from 'react';
import { Box,useMediaQuery,Grid } from '@mui/material';
import Signupform from '../Components/Signupform';
import Logo2 from '../Components/Logo2';
import Terms from '..//Components/Terms';

const Signupbox = () => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
  
    <Grid item xs={12} sm={6} md={6}>
      
             <Box sx={{
            
          //   width: '320px',
          //  width:'100%',
          //   maxWidth:'420px',
            // height: {xs:'550px',md:'600px'},//580
            height:'auto',
            flexShrink: 0,
            borderRadius: '40px',
            backgroundColor: 'rgba(245, 222, 203, 0.80)',
            // display: 'flex',
            // flexDirection: 'column',
           margin:{xs:'50px 40px 40px 40px',sm:'50px 40px 50px 40px',md:'30px 130px 50px 70px',lg:'50px 130px 50px 70px' },
           padding:{xs:'30px',sm:'40px',md:'40px',lg:'50px'},
           justifyContent:'center',
           alignItems:'center'
            
          }}>
            {isMobile ? null :(<Logo2 />)}
            <Signupform/> 
            <Terms/>
            </Box>
            </Grid>
           
  )
}
export default Signupbox
