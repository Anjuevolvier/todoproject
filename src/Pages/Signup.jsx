
import React  from "react";

import {Box,Grid} from "@mui/material";
import Text from '../Components/Text'

import Signupbox from "../Components/Signupbox";
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo2 from '../Components/Logo2'

function Signup() {
  const isMobile = useMediaQuery('(max-width:608px)');

  return(
  
  
  <Box>
      
        
  <Grid container sx={{backgroundImage: "url('/backgrdimage.png')",
   backgroundRepeat: "no-repeat",
   width: "100%",
   
   height:{md:'100vh',xs:'100%'},
   
   backgroundSize: "cover",
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
  }}
   >
 {isMobile ? null :(<Text />)}
 
 {isMobile ? (<Logo2/>) :null}
 
 <Signupbox/>

</Grid>
</Box>
 
  )

}
export default Signup
