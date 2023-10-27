
import React from 'react';
import { Grid, Box } from '@mui/material';

import Text from '../Components/Text';
import Loginbox from '../Components/Loginbox';


const Login = () => {
  return (
   
    
      <Box>
      
        
         <Grid container sx={{backgroundImage: "url('/backgrdimage.png')",
          backgroundRepeat: "no-repeat",
          width: "100%",
          
          height:{md:'100vh',xs:'100%',sm:'100vh'},
          
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
         }}
          >
        <Text />
        <Loginbox />
        
      
    </Grid>
    </Box>
    
  );
};

export default Login;





