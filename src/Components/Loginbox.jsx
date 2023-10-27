// import React, {} from 'react';
// import { Box, Grid } from '@mui/material';
// import Logo2 from '../Components/Logo2'
// import Logo3 from '../Components/Logo3'
// import Form from '../Components/Form';
// import Links  from '../Components/Links';
// import Terms from '../Components/Terms';
// import Or from './Or';




//  const Loginbox = () => {
//   return (
   
//     <Grid item xs={12} sm={6} md={6}  >
//       {/* <Box sx={{ display: 'flex',
//             flexDirection: 'column',}} > */}
//         <Box sx={{
            
//             // width: '520px',
//           //  width:'100%',
//           //   maxWidth:'420px',
//             // height: {xs:'550px',md:'600px'},//580
//             height:'auto',
//             flexShrink: 0,
//             borderRadius: '40px',
//             backgroundColor: 'rgba(245, 222, 203, 0.80)',
//             // display: 'flex',
//             // flexDirection: 'column',
//            margin:{xs:'40px 40px 40px 40px',sm:'40px 10px 40px 10px',md:'30px 100px 30px 70px',lg:'30px 130px 50px 70px'},
//            padding:{xs:'30px',lg:'50px'},
//            justifyContent:'center',
//            alignItems:'center'
            
//           }}>
//                  <Logo2/> 
//                  <Logo3/>
//                   <Or/>
//                  <Form/>
//                 <Links/>
//                 <Terms/> 
                
//                 </Box>
               
              

            
//       </Grid>       
              
             
            
//   )
// }


// export default Loginbox;
import React, {} from 'react';
import { Box, Grid } from '@mui/material';
import Logo2 from '../Components/Logo2'
import Logo3 from '../Components/Logo3'
import Form from '../Components/Form';
import Links  from '../Components/Links';
import Terms from '../Components/Terms';
import Or from './Or';




 const Loginbox = () => {
  return (
   
    <Grid item xs={12} sm={6} md={6}  >
      {/* <Box sx={{ display: 'flex',
            flexDirection: 'column',}} > */}
        <Box sx={{
            
            // width: '520px',
          //  width:'100%',
          //   maxWidth:'420px',
            // height: {xs:'550px',md:'600px'},//580
            height:'auto',
            flexShrink: 0,
            borderRadius: '40px',
            backgroundColor: 'rgba(245, 222, 203, 0.80)',
            // display: 'flex',
            // flexDirection: 'column',
           margin:{xs:'40px 40px 40px 40px',sm:'40px 10px 40px 10px',md:'30px 100px 30px 70px',lg:'30px 130px 50px 70px'},
           padding:{xs:'30px',lg:'50px'},
           justifyContent:'center',
           alignItems:'center'
            
          }}>
                 <Logo2/> 
                 <Logo3/>
                  <Or/>
                 <Form/>
                <Links/>
                <Terms/> 
                
                </Box>
               
              

            
      </Grid>       
              
             
            
  )
}


export default Loginbox;

