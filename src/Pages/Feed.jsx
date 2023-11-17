
import React from 'react';
import { Link } from 'react-router-dom';
//import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Caption from '../Components/Caption';
import Logo2 from '../Components/Logo2';
import AppBar from '@mui/material/AppBar';
import { Box, Grid } from '@mui/material';
import Posts from '../Components/Posts';
import Search from '../Components/Search';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Feed() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [userId] = useState(localStorage.getItem('userId'));
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));


  
        // Fetch posts from the server when the component mounts
        const fetchPosts = async () => {
          const response = await fetch(`http://localhost:8000/fetchposts/${userId}`); // Replace with your actual API endpoint
          console.log('inside fetch data');
          if (response.status === 200) {
            //const postData = await response.json();
            //setPosts(postData.posts); // Assuming the server returns an array of posts
            const responseData = await response.json();
            setPosts(responseData.posts); // Assuming the server returns an array of posts
           // setUser(responseData.user);
            console.log('userdetails', user);
            console.log('posts:', posts);
          } else {
            console.error('Error fetching posts');
          }
        };

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

    fetchPosts();
  },[]);


  return (


    <Box>
      <form encType="multipart/form-data"

      >

        <AppBar position="static" sx={{ backgroundColor: '#0E9B95', padding: '20px' }}><Logo2 />
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',

          }}>
            <Link to="/home">
              <HomeIcon style={{ color: '#000000' }} />
            </Link>
          </Box>
        </AppBar>
        <Grid container
          sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            paddingLeft: { xs: '50px', sm: '100px', md: '200px', lg: '300px', xl: '400px' },
            paddingRight: { xs: '50px', sm: '100px', md: '200px', lg: '300px', xl: '400px' },


          }}>
          <Search />
          <Caption user={user}  fetchPosts={fetchPosts}/>
          <Posts user={user} posts={posts} fetchPosts={fetchPosts} />
        </Grid>

      </form>


    </Box>


  );
}

export default Feed;

