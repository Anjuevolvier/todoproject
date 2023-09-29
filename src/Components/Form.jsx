import React from 'react';
import { Typography, Box,TextField } from '@mui/material';

<Box
        sx={{
          width: '874.576px',
          height: '593.403px',
        }}
      >
        <Typography
          style={{
            color: '#FFF',
            fontFamily: 'Montagu Slab, sans-serif',//index.html import
            fontSize: '100px',
            fontStyle: 'normal',
            fontWeight: 700,//boldness
            lineHeight: '153%',//spacing
            textAlign: 'left',
            marginTop: '150px',
            '@media (max-width: 480px)': {
            
              width: '100px',
              height: '150px',
              flexShrink: '0',
              color: '#FFF',
              textAlign: 'center',
              fontFamily: 'Montagu Slab, sans-serif',
              fontSize: '5px',
              fontStyle: 'normal',
              fontWeight: 200,
              lineHeight: '20px', /* 45.9px */
              marginTop:'50px',
              
        }
            }}
        >
          Discover Your World, Your Way.
               
        </Typography>
      </Box> 
      <Divider style={{ marginTop: isMobile ? '200px':'224px', marginBottom: '10px',width: isMobile ? '200px' : '330.654px',
      height: '1px',background: '#D1B298',marginLeft:'80px' }}/>