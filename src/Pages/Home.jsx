import React, { useState, useEffect } from 'react';

import { useLocation,  } from 'react-router-dom';

import { Typography, Grid, Box } from '@mui/material';
import axios from 'axios';
import Logo2 from '../Components/Logo2';
import AppBar from '@mui/material/AppBar';
import Userdetails from '../Components/Userdetails';



const Home = () => {

  const location = useLocation();

  const userId = location.state.userId;



  const [user, setUser] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const [editedUser, setEditedUser] = useState(null);



  useEffect(() => {

    // Fetch the user details using the user ID

    if (userId) {

      axios.get(`http://localhost:8000/user/${userId}`)

        .then((response) => {

          setUser(response.data);

          // Initialize editedUser with the fetched user data

          setEditedUser(response.data);

        })

        .catch((error) => {

          console.error("Error fetching user details:", error);

        });

    }

  }, [userId]);



  // const handleEditClick = () => {

  //   setIsEditing(true);

  // };



  // const handleCancelClick = () => {

  //   setIsEditing(false);

  //   // Reset editedUser to the original user data

  //   setEditedUser(user);

  // };



  // const handleSaveClick = async () => {

  //   try {

  //     // Send a PUT request to update the user's profile

  //     const response = await axios.put(`http://localhost:8000/user/${userId}`, editedUser);



  //     // Update the user with the updated data

  //     setUser(response.data);

  //     setIsEditing(false);

  //   } catch (error) {

  //     console.error('Error updating profile:', error);

  //   }

  // };
  // const handleInputChange = (e) => {

  //   const { name, value } = e.target;

  //   // Update the editedUser object when input fields change

  //   setEditedUser({ ...editedUser, [name]: value });

  // };



  return (


    <Box>

      <AppBar position="static" sx={{ backgroundColor: '#0E9B95', padding: '20px' }}><Logo2 /></AppBar>

      {user ? (
        <Grid container sx={{paddingLeft:{xs:'30px',sm:'150px',md:'300px',lg:'500px'}}}>
          <Grid item  xs={6} sm={6} md={6} lg={6} sx={{
              width: '100%', height: 'auto', 
               marginTop: '50px'
            }}><Typography sx={{
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
          </Grid>
         
              <Grid item>
            {/* Pass the 'user' object as a prop to UserDetails component */}
            <Userdetails user={user} />
          </Grid>
            {/* </Card> */}
          {/* </Grid> */}
        </Grid>
      ):(
        <p> loading......</p>
      )}
        </Box>


  );

};



export default Home;





















