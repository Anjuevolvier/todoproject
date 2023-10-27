// import React from 'react'
import { Box, Typography,} from '@mui/material';

export const Logo3 = () => {
    return (
        <Box>
        
            
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'xs:center'
               
                
                }}>
                    <Typography sx={{
                        // width: {xs:'200px',md:'319.848px'},
                        // width:'100%',
                        height: {xs:'30px',md:'50.753px'},
                        flexShrink: '0',
                        color: '#000',
                        fontFamily: 'Montagu Slab',
                        fontSize: {xs:'16px',md:'20px'},
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        paddingBottom:'10px',
                        paddingLeft:{xs:'150px',sm:'0px',md:'0px',lg:'0px'}
                        
                        
                       
                        

                    }}>Login with</Typography>
                </Box>
           
                
                <Box sx={{  display: 'flex', flexDirection: 'row',  gap:{xs:'15px',md:'30px'},paddingBottom:'10px' ,paddingLeft:{xs:'150px',sm:'0px',md:'0px',lg:'0px'}
                // marginLeft:{xs:'200px',md:'40px',} 
                }}>
                            <img
                                src='/google.png'
                                alt='Google'
                                style={{
                                maxWidth: '40.327px',
                                width:'100%',
                                height: '40.327px',
                                    // marginLeft:'40px',
                                   
                                }} />
                            <img
                                src='/facebook.png'
                                alt='Facebook'
                                style={{
                                    maxWidth: '40.327px',
                                    width:'100%',
                                    height:'40.327px',
                                }} />
                        </Box>
                        
                </Box>
           

    )
}
export default Logo3
