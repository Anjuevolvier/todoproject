import React, { useState, useEffect } from 'react';

//import { useLocation, } from 'react-router-dom';

import { Typography, Grid, Box } from '@mui/material';
import axios from 'axios';
import Logo2 from '../Components/Logo2';
import AppBar from '@mui/material/AppBar';
import Userdetails from '../Components/Userdetails';



const Home = () => {

  // const location = useLocation();

  // const userId = location.state.userId;



  const [user, setUser] = useState(null);

  // const [isEditing, setIsEditing] = useState(false);

  // const [editedUser, setEditedUser] = useState(null);


  const [userId] = useState(localStorage.getItem('userId'));
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  useEffect(() => {
    // Fetch the user details using the user ID and the authToken
    const authToken = localStorage.getItem('authToken'); // Get the authentication token from local storage
    const userId = localStorage.getItem('userId'); 


    if (userId && authToken) {
      console.log('inside home client')
      axios
        .get(`http://localhost:8000/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${authToken}`, // Include the authToken in the request headers
          },
        })
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [userId]);


  return (


    <Box>

      <AppBar position="static" sx={{ backgroundColor: '#0E9B95', padding: '20px' }}><Logo2 /></AppBar>

      {user ? (
        <Grid container
          // justifyContent={'center'}
          // alignItems={'center'}
          // marginLeft={'10px'}
          display={'flex'}
          flexDirection={'column'}
          // paddingLeft={{xs:'50px',sm:'180px',md:'200px',lg:'380px',xl:'450px'}}//350 400
          // paddingRight={{xs:'100px',sm:'180px',md:'200px',lg:'380px',xl:'500px'}}//400 500
          paddingLeft={{xs:'30px',sm:'80px',md:'200px',lg:'260px',xl:'450px'}}//350 400
          paddingRight={{xs:'100px',sm:'120px',md:'250px',lg:'310px',xl:'500px'}}//400 500
          //  backgroundColor={'blue'}
          paddingTop={'50px'}
          >
         
         <Grid item
            sx={{
              width: '100%',
              height: 'auto',
              marginBottom:'20px',
             
              flexDirection:'column',
              // backgroundColor:'red',
              // display: 'flex',
              // flexDirection: 'column',
              alignItems: 'center',
              // overflowX: 'hidden', // Prevent horizontal scrolling
            }}>
         <Box sx={{textAlign:'left'}}>
            <Typography sx={{
              color: '#000',
              fontFamily: 'Montagu Slab, sans-serif',
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
            }}>Hey <span style={{
              color: '#0E9B95', fontFamily: 'Montagu Slab, sans-serif',
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: 'normal',
              textTransform: 'capitalize',
            }}>{user.firstname}</span>,</Typography>
            <Typography sx={{
              color: '#000',
              fontFamily: 'Montagu Slab, sans-serif',
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
            }}>here is your <span style={{
              color: '#000',
              fontFamily: 'Montagu Slab, sans-serif',
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: 'normal'
            }}>RoamRight Profile !</span> </Typography>
            </Box>

          </Grid>

          <Grid item>
            {/* Pass the 'user' object as a prop to UserDetails component */}
            <Userdetails user={user} authToken={authToken} setAuthToken={setAuthToken} />
          </Grid>

        </Grid>
      ) : (
        <p> loading......</p>
      )}
    </Box>


  );

};



export default Home;





















