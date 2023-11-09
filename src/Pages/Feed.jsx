
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Feed() {
  const location = useLocation();
  const userId = location.state.userId;
  const [image, setImage] = useState(null);
  const [text,setText] = useState('');
  const [pic, setPic] = useState(null);
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const handleImageUpload = (file) => {
    console.log('File received:', file);
    setPic(URL.createObjectURL(file));
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('userId', userId);
    // Check if a caption is provided, and append it only if it's not empty
      if (text) {
        formData.append('text', text);
      }
      if(image) {
        
        formData.append('image', image);
      }


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
    setText('')

    } else {
      console.error('error in posting');
    }
  };
/////////////////////////fetch posts
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

//////////////////////////searching  for user
  const handleSearch = async () => {
    console.log('inside handle search');
    // Fetch user search results based on the searchQuery
    const response = await fetch(`http://localhost:8000/users/search?query=${searchQuery}`);////search?query=john,search query name of person i searched
    if (response.status === 200) {
      const searchData = await response.json();
      console.log('searchData',searchData);
      setSearchResults(searchData.users);
    } else {
      console.error('Error searching for users');
    }
  };
  ////////////////////////handle follow
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
  };


  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
     
  <br/>
  <br/>
        <input
          type="text"
          placeholder="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
        <br/>
        <Link to="/home">
          <button type="submit">Home</button>
        </Link>
      </form>
      <br />

      <div>
        <input
          type="text"
          placeholder="Search for users"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {searchResults.map((user) => (
            <li key={user._id}>
              {user.firstname}
              <button onClick={() => handleFollow(user._id)}>Follow</button>
            </li>
          ))}
        </ul>
      </div>
     <div>
  {posts && posts.map((post) => (
    <div key={post._id}>
      {post.images && post.images[0] && post.images[0].url ? (
        <img src={post.images[0].url} alt="Posted" style={{ maxWidth: '200px', maxHeight: '200px' }} />
      ) : null}
      <p>{post.text}</p>
    </div>
  ))}
</div>

    </div>
  );
}

export default Feed;


