import React from 'react'
import { Grid, Typography, Box} from '@mui/material';


export const Text = () => {
  return (
   <Grid item xs={12} sm={6} md={6}  >
  
       <Box sx={{display: 'flex', 
                            flexDirection: 'column',}}>
                <Box sx={{
                  // display: 'flex', 
                  //           flexDirection: 'row',
                            alignItems:'flex-start',
                            justifyContent:'flex-start',
                            margin:{xs:'30px 0px 0px 240px',sm:'0px 0px 0px 120px',md:'0px 0px 0px 80px',
                            lg:'62px 62px 62px 62px'}

                            
                            
                            }}>
                    <img src='/logo.png'
                        style={{
                            width:'50px',
                            height: '50px',
                            
                           
                         }}
                    />
                    </Box>
 <Box >
<Typography
          sx={{
            color: '#FFF',
            fontFamily: 'Montagu Slab, sans-serif',//index.html import
            fontSize: {xs:'30px',sm:'45px',md:'60px',lg:'80px',},
            fontStyle: 'normal',
            fontWeight: 700,//boldness
            lineHeight: '153%',//spacing
            textAlign:{xs:'center', md:'left'},
            
            width:'100%',
            height:{xs:'200px',md:'400px',},
            // display: 'flex', 
            // flexDirection: 'row',
          //  margin:'62px'
          margin:{xs:'30px 0px 0px 0px',
                            md:'62px 62px 62px 62px'}
            
            
            }}
        >
          Discover <br/>Your World,<br/>Your Way.
               
        </Typography>
        </Box>
      </Box> 
      
      </Grid>
      
      
      
     
  )
}
export default Text
