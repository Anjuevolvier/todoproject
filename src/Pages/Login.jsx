import React from 'react';
import { Typography, Box,useMediaQuery, Theme} from '@mui/material';

const Login = () => {
  
   const isMobile = useMediaQuery('(max-width: 768px)');
    return (
    <Box
      sx={{
        backgroundImage: "url('/backgrdimage.png')",
        backgroundRepeat: 'no-repeat',
        width: '100wh',
        height: '100vh',
        flexShrink: 0,
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',//flex container and create flexible layout
        alignItems: 'center',//centre
        justifyContent: 'flex-start',//left
        paddingLeft: '20px',
        '@media (max-width: 600px)': {
          backgroundImage: "url('/backgrdiphn.png')",
          backgroundRepeat: 'no-repeat',
          width:'100whpx',
          height:'100vhpx',
          flexShrink: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          position: 'relative',
          
          }
        }}
    >
      <Box
        sx={{
          width: isMobile ? '-30px' :'879.576px',
          height: isMobile ? '-50px' :'593.403px',
        }}
      >
        <Typography
          style={{
            color: '#FFF',
            fontFamily: 'Montagu Slab, sans-serif',//index.html import
            fontSize: isMobile ? '30px' :'100px',
            fontStyle: 'normal',
            fontWeight: 700,//boldness
            lineHeight: '153%',//spacing
            textAlign:isMobile ? 'center' : 'left',
            marginTop:isMobile ? '-290px' : '100px',
            marginLeft:isMobile ? '70px' : 'none'
            
            }}
        >
          Discover<br /> Your World,<br /> Your Way.
               
        </Typography>
      </Box> 
    
       
      </Box>

  );
};

 export default Login



