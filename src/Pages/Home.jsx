import React, { useState, useEffect } from 'react';

import { useLocation,Link } from 'react-router-dom';

import axios from 'axios';

 

const Home = () => {

    const location = useLocation();

    const userId = location.state.userId;

 

   

  const [user, setUser] = useState(null);

 

  useEffect(() => {

 

    // Fetch the user details using the user ID

    if(userId){

    axios.get(`http://localhost:8000/user/${userId}`)

      .then((response) => {

        setUser(response.data);

      })

      .catch((error) => {

        console.error("Error fetching user details:", error);

      });

    }

  }, [userId]);

 

  return (

    <div>

      {user ? (

        <div>

          <h1>Welcome,</h1>

          <p>Firstname: {user.firstname}</p>
          <p>Lastname: {user.lastname}</p>
          <p>Email: {user.email}</p>

          <p>Gender: {user.gender}</p>

          <p>Phone: {user.phone}</p>
          <Link to="/" >Logout </Link>

        </div>

      ) : (

        <p>Loading user details...</p>

      )}

    </div>

  ); 

};


 

export default Home;

    
    
  




    
  
    

  







