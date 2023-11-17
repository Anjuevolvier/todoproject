import React, { useState, } from 'react'
import { TextField, Typography, Grid, Box, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
//import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  //   const [userId] = useState(localStorage.getItem('userId'));
  //   const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  ////////////////////////searching  for user

  const handleSearch = async () => {
    console.log('inside handle search');
    // Fetch user search results based on the searchQuery
    const response = await fetch(`http://localhost:8000/users/search?query=${searchQuery}`);////search?query=john,search query name of person i searched
    if (response.status === 200) {
      const searchData = await response.json();
      console.log('searchData', searchData);
      setSearchResults(searchData.users);
    } else {
      console.error('Error searching for users');
    }
  };


  ////////////////////////////handle follow
 // const authToken = localStorage.getItem('authToken'); // Get the authentication token from local storage
  const userId = localStorage.getItem('userId');
  // if (userId && authToken) {
  const handleFollow = async (otherUserId) => {
    // You'll need to send a request to your server to update the user's follow list.
    console.log('inside handleFollow client');
    const response = await fetch(`http://localhost:8000/users/follow/${userId}/${otherUserId}`, {
      method: 'POST',
    });//otherUserId represents the ID of the user that you want to follow.
    if (response.status === 200) {
      console.log('successfully followed user');
    } else {
      console.error('Error following users');
    }
    ;
  }
  return (
    <Grid container >
   
      <TextField
        label={(<Typography sx={{
          color: '#C0C0C0',
          fontFamily: 'Montagu Slab, sans-serif',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '21.78px',
          marginRight: '100px',
        }}>Search friends
        </Typography>)}

        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='search' variant='outlined'
        sx={{
          width: '100%',
          flexShrink: 0,
          borderRadius: '10px',
          background: '#FFFFFF',
          border: '1px solid #DEDEDE',
          marginTop: '30px',
          outline: 'none'
        }}
        InputProps={{

          endAdornment: (

            <InputAdornment position="end">
              <SearchIcon onClick={handleSearch} sx={{ color: '#0E9B95', cursor: 'pointer' }} />
            </InputAdornment>),

        }}>

      </TextField>
      {searchResults.map((user) => (

        <Box key={user._id}
          sx={{
            width: '100%',
            borderRadius: '0px 0px 12px 12px',
            backgroundColor: '#FFFFFF',
            boxShadow: 4,
            display: 'flex',
            flexDirection: 'column',
            p: 3,
            marginTop:'10px'
          }}>
        
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Avatar
              //src={user.imagePath[0].url}
              src={user.imagePath && user.imagePath[0] ? user.imagePath[0].url : ''}
              sx={{
                width: '47px',
                height: '47px',
                borderRadius: '160px',
                background: '#D9D9D9',

              }}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
              <Typography
                sx={{
                  fontFamily: 'Montagu Slab',
                  fontSize: '18px',
                  fontWeight: '700',
                  lineHeight: '23px',
                  letterSpacing: '0em',
                  textAlign: 'left',
                  textTransform: 'capitalize',
                  marginRight:'400px'

                }}
              >
                {user.firstname} {user.lastname}
              </Typography>

              <Typography sx={{
                fontFamily: 'Montagu Slab',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '23px',
                letterSpacing: '0em',
                textAlign: 'left',

              }}> {user.email}</Typography>
            </Box>

            {userId !== user._id && ( // Check if the searched user is not the logged-in user
            <Button variant="outlined" onClick={() => handleFollow(user._id)} sx={{
  color: '#202020',
  fontFamily: 'Montagu Slab, sans-serif',
  fontSize: '15px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
  textTransform: 'capitalize',
  border: '1px solid black',
}}>Follow</Button>
            )}

          </Box>



        </Box>
        // </Box>


      ))}
    </Grid>
   
  )
}
export default Search
