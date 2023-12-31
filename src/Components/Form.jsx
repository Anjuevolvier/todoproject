
import React, { useState } from 'react';
import {  TextField, Typography, Button,  IconButton, InputAdornment, Grid } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios"
import { useNavigate,  } from "react-router-dom"




const Form = () => {
  const history = useNavigate();
 

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);



  const togglePasswordVisibility = () => {

    setShowPassword((prevShowPassword) => !prevShowPassword);

  };
  
  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/', {
        email,
        password,
      });

      console.log('response', response);

      if (response.data && response.data.user && response.data.user._id && response.data.authToken) {
        const userId = response.data.user._id;
        const authToken = response.data.authToken;
        localStorage.setItem('authToken',authToken);
        localStorage.setItem('userId',userId);
       
        //setCurrentUser(authToken);
        history('/', { state: { userId } });
      } 
      else if (response.data === 'User does not exist') {
        alert('User has not signed up');
      } else{
        alert('Wrong details');
      }
    } catch (error) {
      alert('Wrong details');
      console.error(error);
    }
  };
  return (
    <Grid container
      justifyContent={'center'}
      alignItems={'center'}
      spacing={2}
      overflow={'hidden'}
     

      >
      <Grid item xs={12} sm={12} md={12} lg={12} >
      
          <TextField label={(<Typography sx={{
            color: '#B4B4B4',
            fontFamily: 'Montagu Slab, sans-serif',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal'
          }}>Email</Typography>)}
            onChange={(e) => { setEmail(e.target.value) }}
            placeholder='email'  variant='outlined'
            sx={{
              maxWidth: '422.219px',
              width:'100%',
              height: '54.667px',
              flexShrink: 0,
              borderRadius: '11px',
              border: '1px solid #EEE1C3',
              background: '#FFFCF3',
              // margin:'25px 0px 10px 40px',
              outline: 'none'
            }}>

          </TextField>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}> 
          <TextField label={(<Typography style={{
            color: '#B4B4B4',
            fontFamily: 'Montagu Slab, sans-serif',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
          }}>Password</Typography>)}
            onChange={(e) => { setPassword(e.target.value) }}
            placeholder='Password' variant='outlined'
            type={showPassword ? 'text' : 'password'}
            sx={{
              maxWidth: '422.219px',
              width:'100%',
              height: '54.667px',
              flexShrink: 0,
              borderRadius: '11px',
              border: '1px solid #EEE1C3',
              background: '#FFFCF3',
              // position: 'absolute',
              // top: '320px',
              // left: '50px'
              // margin:'0px 0px 10px 40px'

            }}
            InputProps={{

              endAdornment: (

                <InputAdornment position="end">

                  <IconButton

                    onClick={togglePasswordVisibility}

                    edge="end"

                    color="transparent">
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}

                  </IconButton>

                </InputAdornment>

              ),

            }}>
          </TextField>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
        
          <Button
            onClick={submit}
            sx={{
              maxWidth: '422.219px',
              width:'100%',
              height: '53.667px',
              flexShrink: '0',
              borderRadius: '11px',
              background: '#1B1B1B',
              
              // margin:'0px 0px 0px 45px',
              color: '#FFF',
              fontFamily: 'Montagu Slab',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: 'normal',
              textTransform: 'capitalize',
            }}>Continue</Button>
            </Grid>
       
    </Grid>
  )
}
export default Form

