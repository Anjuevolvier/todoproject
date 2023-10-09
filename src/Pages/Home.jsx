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



  const handleEditClick = () => {

    setIsEditing(true);

  };



  const handleCancelClick = () => {

    setIsEditing(false);

    // Reset editedUser to the original user data

    setEditedUser(user);

  };



  const handleSaveClick = async () => {

    try {

      // Send a PUT request to update the user's profile

      const response = await axios.put(`http://localhost:8000/user/${userId}`, editedUser);



      // Update the user with the updated data

      setUser(response.data);

      setIsEditing(false);

    } catch (error) {

      console.error('Error updating profile:', error);

    }

  };
  const handleInputChange = (e) => {

    const { name, value } = e.target;

    // Update the editedUser object when input fields change

    setEditedUser({ ...editedUser, [name]: value });

  };



  return (


    <Box>

      <AppBar position="static" sx={{ backgroundColor: '#0E9B95', padding: '20px' }}><Logo2 /></AppBar>

      {user ? (
        <Grid container>
          <Grid item sx={{
              width: '100%', height: 'auto', marginLeft: '500px', marginTop: '50px'
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
          {/* <Grid item> */}
            {/* <Card sx={{
              borderRadius: '20px',
              border: '5px dashed #0E9B95',
              background: '#FFF', maxWidth: '700px', width: '100%', height: ' 350.289px', marginLeft: '500px', marginTop: '20px'
            }}> */}
              {/* <CardContent>
             <Typography

                  sx={{

                    color: '#000',

                    fontFamily: 'Aleo, sans-serif',

                    fontSize: '35px',

                    fontStyle: 'normal',

                    fontWeight: '700',

                    lineHeight: 'normal',

                  }}>{isEditing ? <input type="text" name="firstname" value={editedUser.firstname} onChange={handleInputChange} /> : user.firstname}{' '}



                  {isEditing ? <input type="text" name="lastname" value={editedUser.lastname} onChange={handleInputChange} /> : user.lastname}</Typography>

                <Typography sx={{

                  color: '#000',

                  fontFamily: 'Aleo, sans-serif',

                  fontSize: '20px',

                  fontStyle: 'normal',

                  fontWeight: '400',

                  lineHeight: 'normal',

                }}> {isEditing ? <input type="email" name="Email" value={editedUser.email} onChange={handleInputChange} /> : user.email}</Typography>

                <Typography sx={{

                  color: '#000',

                  fontFamily: 'Aleo, sans-serif',

                  fontSize: '20px',

                  fontStyle: 'normal',

                  fontWeight: '400',

                  lineHeight: 'normal',

                }}> {isEditing ? <input type="number" name="Phone" value={editedUser.phone} onChange={handleInputChange} /> : user.phone}</Typography>

                <Typography sx={{

                  color: '#000',

                  fontFamily: 'Aleo, sans-serif',

                  fontSize: '20px',

                  fontStyle: 'normal',

                  fontWeight: '400',

                  lineHeight: 'normal',

                }}> {isEditing ? <input type="text" name="Gender" value={editedUser.gender} onChange={handleInputChange} /> : user.gender}</Typography>



                {isEditing ? (

                  <div>

                    <button onClick={handleSaveClick}>Save</button>

                    <button onClick={handleCancelClick}>Cancel</button>

                  </div>

                ) : (

                  <button onClick={handleEditClick}>Edit Profile</button>

                )}

                <br />

                <Link to="/">Logout</Link>



              </CardContent> */}
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
{/* <p> <span>Name: </span>{isEditing ? <input type="text" name="firstname" value={editedUser.firstname} onChange={handleInputChange}/> : user.firstname}
          <span> </span>
           {isEditing ? <input type="text" name="lastname" value={editedUser.lastname} onChange={handleInputChange} /> : user.lastname}</p>
           

          <p>Email: {isEditing ? <input type="email" name="Email" value={editedUser.email} onChange={handleInputChange} />:user.email}</p>

          <p>Password: {isEditing ? <input type="password" name="Password" value={editedUser.password} onChange={handleInputChange} />:user.password}</p>

          <p>Gender: {isEditing ? <input type="text" name="Gender" value={editedUser.gender} onChange={handleInputChange} />:user.gender}</p>

          <p>Phone: {isEditing ? <input type="number" name="Phone" value={editedUser.phone} onChange={handleInputChange} />:user.phone}</p>
          <Link to="/" >Logout </Link>
           <br/>
           <br/>
          {isEditing ? (

            <div>

              <button onClick={handleSaveClick}>Save</button>

              <button onClick={handleCancelClick}>Cancel</button>

            </div>

          ) : (

            <button onClick={handleEditClick}>Edit Profile</button>

          )} */}





















