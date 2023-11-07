
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Feed() {
  const location = useLocation();
  const userId = location.state.userId;
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [caption,setCaption] = useState('');
  const [pic, setPic] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleImageUpload = (file) => {
    console.log('File received:', file);
    setPic(URL.createObjectURL(file));
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('image', image);
    formData.append('content', content);
    formData.append('caption', caption);


    const response = await fetch('http://localhost:8000/posts', {
      method: 'POST',
      body: formData,
    });

    if (response.status === 200) {
      const responseData = await response.json();
      console.log('successfully posted');
      console.log('Saved Post:', responseData.savedPost);
       // Reset the state to clear the selected image
    setImage(null);
    setPic(null);
    //setContent(''); // You can reset the content as well if needed
    setCaption('')
    } else {
      console.error('error in posting');
    }
  };

  useEffect(() => {
    // Fetch posts from the server when the component mounts
    const fetchPosts = async () => {
      const response = await fetch(`http://localhost:8000/fetchposts/${userId}`); // Replace with your actual API endpoint
      if (response.status === 200) {
        const postData = await response.json();
        setPosts(postData.posts); // Assuming the server returns an array of posts
      } else {
        console.error('Error fetching posts');
      }
    };
    fetchPosts();
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
      <textarea
    placeholder="Enter your content"
    value={content}
    onChange={(e) => setContent(e.target.value)}
  />
  <br/>
  <br/>
        <input
          type="text"
          placeholder="Enter your caption"
          //value={content}
          //onChange={(e) => setContent(e.target.value)}
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e.target.files[0])}
        />
        <br />
        {image && <img src={pic} alt="Selected" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
        <br />
        <button type="submit">Post</button>
        <Link to="/home">
          <button type="submit">Home</button>
        </Link>
      </form>
      <br />

      <div>
        {posts.map((post) => (
          <div key={post._id}>
            <img src={post.images[0].url} alt="Posted" style={{ maxWidth: '200px', maxHeight: '200px' }} />
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
// import React from 'react'
// import { Link } from 'react-router-dom';

// function Feed() {
//   return (
//     <div>
//     <div>Feed</div>
//     <Link to="/home">
//           <button type="submit">Home</button>
//        </Link>
//        </div>
//   )
// }

// export default Feed