import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';


const Posts = ({fetchPosts,user,posts}) => {
  //  const [posts, setPosts] = useState([]);
  //const [user, setUser] = useState(null);
console.log('userpost;',posts);


if (!posts || posts.length === 0) {
  console.log('not post yet');
  return null; 
}

  return (
    <Grid container spacing={2}>
   

    
      {posts.map((post) => (
        <Grid item key={post._id} xs={12}>
          <Box
            sx={{
              width: '100%',
              borderRadius: '20px',
              backgroundColor: '#FFFFFF',
              boxShadow: 4,
              marginTop:'20px',
             
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'row', p: 2 }}>
              <Avatar
               
                 src={post.user.imagePath && post.user.imagePath[0] ? post.user.imagePath[0].url :''}
                // src={post.user.imagePath && post.user.imagePath[0] ? post.user.imagePath[0].url : (user.firstname.charAt(0).toUpperCase() + user.lastname.charAt(0).toUpperCase()) || ''}

                sx={{
                  width: '47px',
                  height: '47px',
                  borderRadius: '160px',
                  background: '#D9D9D9',
                  marginRight: '20px',
                }}
              />
              {post.user && (
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'Montagu Slab',
                      fontSize: '18px',
                      fontWeight: '700',
                      lineHeight: '23px',
                      letterSpacing: '0em',
                      textAlign: 'left',
                      textTransform: 'capitalize',
                    }}
                  >
                    {post.user.firstname} {post.user.lastname}
                  
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontFamily: 'Montagu Slab',
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '23px',
                      letterSpacing: '0em',
                      textAlign: 'left',
                    }}
                  >
                    {new Date(post.createdAt).toLocaleDateString('en-US', { day: 'numeric' })}{' '}
                    {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long' })}
                  </Typography>
                </Box>
              )}
            </Box>

            <Box sx={{ marginTop: '10px', p: 2 }}>
              {post.text && (
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Montagu Slab',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                    marginTop: '10px',
                  }}
                >
                  {post.text}
                </Typography>
              )}

              {post.images && post.images.length > 0 && (
                <Box sx={{ marginTop: '10px' }}>
                  {post.images.map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt='post'
                      // alt={`post-image-${index}`}
                      style={{ width: '100%', borderRadius: '10px' }}
                    />
                  ))}
                </Box>
              )}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  
  );
};

export default Posts;