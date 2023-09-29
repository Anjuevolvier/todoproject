import React from 'react';
import { Box,useMediaQuery} from '@mui/material';
 
const Logo = () =>
{
    const isMobile = useMediaQuery('(max-width: 768px)');
    return(
        <Box>
            <img src='/logo.png'
            style={{
                width:'50px',
                height:'50px',
                position:'absolute',
                top: isMobile ? '50px' :'30px',
                left: isMobile ? '160px' :'30px',

            }}
            />
            </Box>
        

        
            
        
    )
    
    }
    export default Logo