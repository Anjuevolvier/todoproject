import { Box, Grid, TextField } from '@mui/material';
import { Button } from '@mui/material';
import React, { useState, } from 'react';
// import Posts from '../Components/Posts';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


function Caption({fetchPosts,users}) {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  // const [posts, setPosts] = useState([]);
  // const [user, setUser] = useState(null);
  const [userId] = useState(localStorage.getItem('userId'));
  //const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const [selectImage, setSelectImage] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);


  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    setSelectImage(URL.createObjectURL(selectedImage));
    setIsImageSelected(true);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('inside submit');
    const formData = new FormData();
    formData.append('userId', userId);
    // Check if a caption is provided, and append it only if it's not empty
    if (text) {
      formData.append('text', text);
    }
    if (image) {

      formData.append('image', image);
    }

    const response = await fetch('http://localhost:8000/posts', {
      method: 'POST',
      body: formData,
    });

    if (response.status === 200) {
      const responseData = await response.json();
      console.log('successfully posted');
     fetchPosts();
     setImage(null);
    setSelectImage(null);
    setIsImageSelected(false);
      console.log('Saved Post:', responseData.savedPost);
      console.log('User Data:', responseData.user);
     
      setImage(null);
      // setPic(null);
      //setContent(''); // You can reset the content as well if needed
      setText('')

    } else {
      console.error('error in posting');
    }

  };

  
  
 


  const handleRemoveImage = async () =>
  { 
  
  const confirmRemove = window.confirm('Do you really want to delete the selected image?');

  if (confirmRemove) {
    // Reset the state values related to the image
    setImage(null);
    setSelectImage(null);
    setIsImageSelected(false);
  }
  }
  return (
    <Grid container>
  
      <Box sx={{
        width: '100%',
        marginTop: '30px',
        borderRadius: '20px',
        backgroundColor: '#FFFFFF',
        boxShadow: 4,
        display: 'flex',
        flexDirection: 'column',
        p: 3,


      }}>
        {/* <Box sx={{ display: 'flex', flexDirection: 'column', }}> */}

          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something"
            multiline
            rows={5}
            backgroundColor='#DEDEDE'
            borderRadius='3px'

          />

          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

            <label htmlFor="imageInput">
              <img
                src='/imageicon.png'
                alt='imageicon'
                style={{
                  width: '50px',
                  height: '50px',
                  marginLeft: '0px',
                  marginTop: '20px',
                  cursor: 'pointer',
                }}
              />
            </label>

            <input
              id="imageInput"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            {isImageSelected && (
              <Box sx={{ display: 'flex', alignItems: 'flex-end', position: 'relative',marginRight:'480px' }}>
                <RemoveCircleIcon  onClick = {handleRemoveImage}sx={{ fontSize: 20, color: 'red', position: 'absolute', top: '20px',left:'40px' }} />
                <Box sx={{
                  width: '50px',
                  height: '50px',
                  border: '1px solid #DEDEDE',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}>

                  {selectImage && (
                    <img
                      src={selectImage}
                      alt="selected"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}

                    />)}

                </Box>
              </Box>
            )}
            <Button type="submit"
              onClick={handleSubmit}
              sx={{
                borderRadius: '10px',
                background: '#0E9B95', color: '#FFF', fontFamily: 'Inter',
                fontWeight: '400', fontSize: '18px', lineHeight: '21px',
                textTransform: 'capitalize',
                marginTop: '40px',
                //marginLeft:{xl:'480px',lg:'300px',md:'',sm:'',xs:''}
              }}>Post</Button>
          </Box>

        </Box>


      {/* </Box> */}
      {/* <div><Posts user={user} posts={posts} />
      </div> */}


    </Grid>
    
  )
}

export default Caption