import React from 'react';
import { Box,useMediaQuery } from '@mui/material';

const Logo2 = () =>
{
   const isMobile = useMediaQuery('(max-width: 768px)');
    return(
        <img src='/Group 68.png'
            style={{
                width:'350.508px',
                height:'45.792px',
                position:'absolute',
                top: isMobile ? '350px' : '100px',
                left:  isMobile ? '-150px':'750px',
                transform: 'translate(50%,50%)',
            }}
                            />
    )
        }
export default Logo2
