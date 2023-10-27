
import React  from 'react'
import { Typography, Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { useState } from 'react';
import { useNavigate, } from "react-router-dom"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Signupform from '../Components/Signupform';
//import axios from 'axios';






function Userdetails({ user,authToken,setAuthToken, }) {

  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {

    setIsEditing(true);

  };
  const handleClose = () => {
    setIsEditing(false);
  };



  const history = useNavigate();

  // const handleLogoutClick = () => {
   
  //   history('/');
  // }
 
  const handleLogoutClick = async () => {
    try {
     
      const response = await fetch("http://localhost:8000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user._id }),
      });
      
  
      if (response.status === 200) {
        // Clear the token from local storage
        localStorage.removeItem('authToken');
        
        // Update the authentication state to indicate the user is not authenticated
        setAuthToken(null); 
           
      
        history('/login');
      } else {
        // Handle the case where the logout request on the server failed
        console.error("Logout failed on the server");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Box

      sx={{
        borderRadius: '20px',
        border: '5px dashed #0E9B95',
        background: '#FFF',
        width: '100%',
        height: 'auto',
        display: 'flex',
       flexDirection:{xs:'column',sm:'column',md:'row',lg:'row',xl:'row'},
        justifyContent: 'space-between',
      alignItems:{xs:'center'},
        padding:{xs:'10px',sm:'20px',md:'20px',lg:'20px',xl:'20px'}
      }}>
      <Box display={'flex'} flexDirection ={{xs:'column',sm:'row',md:'row',lg:'row',xl:'row'}} gap={'20px'}   >
        <Box>
          <Avatar sx={{ width: '150px', height: '150px', fontSize: '50px' }}>{user.firstname.charAt(0).toUpperCase() + user.lastname.charAt(0).toUpperCase()}</Avatar>
        </Box>
        <Box>
          <Typography
            sx={{
              color: '#000',
              fontFamily: 'Montagu Slab, sans-serif',
              fontSize: '35px',
              fontStyle: 'normal',
              fontWeight: '700',
              lineHeight: 'normal',
              textTransform: 'capitalize',
            }}>
            {user.firstname} {user.lastname}
          </Typography>

          <Typography sx={{
            color: '#000',
            fontFamily: 'Montagu Slab, sans-serif',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
          }}>
            {user.email}
          </Typography>

          <Typography sx={{
            color: '#000',
            fontFamily: 'Montagu Slab, sans-serif',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
          }}>
            +91  {user.phone}
          </Typography>


          <Typography
            sx={{
              color: '#000',
              fontFamily: 'Montagu Slab, sans-serif',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            {user.gender === 'female' ? (
              <FemaleIcon fontSize="inherit" color="#0E9B9" />
            ) : (
              <MaleIcon fontSize="inherit" color="#0E9B9" />
            )}  {user.gender}
          </Typography>
        </Box>
      </Box>

      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'10px'} marginRight={{xs:'70px'}}  marginTop={{xs:'30px'}}>
        <Button variant="outlined" onClick={handleEditClick} sx={{
          color: '#202020',
          fontFamily: 'Montagu Slab, sans-serif',
          fontSize: '15px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 'normal',
          textTransform: 'capitalize',
          border: '1px solid black',
        }}>Edit Details</Button>
        <Dialog open={isEditing} onClose={handleClose}>
          <DialogTitle sx={{
            color: '#000',
            fontFamily: 'Montagu Slab, sans-serif',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 'normal',
            textTransform: 'capitalize',
          }}>Edit Profile</DialogTitle>
          <DialogContent>
            <Signupform user={user} onClose={handleClose} />
          </DialogContent>
        </Dialog>
        <Button variant="outlined" onClick={handleLogoutClick} sx={{
          color: '#202020',
          fontFamily: 'Montagu Slab, sans-serif',
          fontSize: '15px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 'normal',
          textTransform: 'capitalize',
          border: '1px solid black',
          padding: '5px 32px 5px 32px '
        }}>Logout</Button>

      </Box>
    </Box>



  );
};


export default Userdetails;






