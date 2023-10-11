// import React from 'react'
// import { Typography,Box,Grid,Button} from '@mui/material';
// import Avatar from '@mui/material/Avatar';
// import FemaleIcon from '@mui/icons-material/Female';
// import MaleIcon from '@mui/icons-material/Male'; 
// import { useState } from 'react';
// import { useNavigate,  } from "react-router-dom"
// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';
// import DialogTitle from '@mui/material/DialogTitle';
// import Signupform from '../Components/Signupform';




//  function Userdetails({user}) {
  
//   const [isEditing, setIsEditing] = useState(false);
//   const handleEditClick = () => {

//     setIsEditing(true);

//   };
//   const handleClose = () => {
//     setIsEditing(false);
//   };
 


//   const history = useNavigate();

// const handleLogoutClick = () => {
//   // Navigate to the desired page (e.g., '/logout')
//   history('/');
// };

 



//   return (
 

//     <Box sx={{
//       borderRadius: '20px',
//       border: '5px dashed #0E9B95',
//       background: '#FFF',
//       maxWidth: '700px',
//       width: '100%',
//       // height: ' 300.289px',
//       height:'auto',
//       marginLeft: {xs:'50px',sm:'100px',md:'250px',lg:'400px',xl:'500px'},
//       marginTop: {xs:'10px',sm:'10px',xl:'20px'}
     
//     }}>
//       <Grid container spacing={3} paddingTop={'60px'} paddingLeft={'30px'} paddingBottom={'60px'} >
//       <Grid item  xs={4} sm={4} md={4} lg={4} >
//       <Avatar sx={{ width:'150px',height:'150px',fontSize:'50px' }}>{user.firstname.charAt(0).toUpperCase() + user.lastname.charAt(0).toUpperCase()}</Avatar>
//       </Grid>
//      <Grid item >
//         <Typography
//           sx={{
//             color: '#000',
//             fontFamily: 'Montagu Slab, sans-serif',
//             fontSize: '35px',
//             fontStyle: 'normal',
//             fontWeight: '700',
//             lineHeight: 'normal',
//             textTransform: 'capitalize',
//           }}>
//           {user.firstname} {user.lastname}
//         </Typography>

//         <Typography sx={{
//           color: '#000',
//           fontFamily: 'Montagu Slab, sans-serif',
//           fontSize: '20px',
//           fontStyle: 'normal',
//           fontWeight: '400',
//           lineHeight: 'normal',
//         }}>
//            {user.email}
//         </Typography>

//         <Typography sx={{
//           color: '#000',
//           fontFamily: 'Montagu Slab, sans-serif',
//           fontSize: '20px',
//           fontStyle: 'normal',
//           fontWeight: '400',
//           lineHeight: 'normal',
//         }}>
//           +91  {user.phone}
//         </Typography>

//         {/* <Typography sx={{
//           color: '#000',
//           fontFamily: 'Montagu Slab, sans-serif',
//           fontSize: '20px',
//           fontStyle: 'normal',
//           fontWeight: '400',
//           lineHeight: 'normal',
//         }}>
//            {user.gender}
//         </Typography> */}
//         <Typography
//   sx={{
//     color: '#000',
//     fontFamily: 'Montagu Slab, sans-serif',
//     fontSize: '20px',
//     fontStyle: 'normal',
//     fontWeight: '400',
//     lineHeight: 'normal',
//   }}
// >
//   {user.gender === 'female' ? (
//     <FemaleIcon fontSize="inherit" color="#0E9B9"  /> 
//   ) : (
//     <MaleIcon fontSize="inherit" color="#0E9B9" /> 
//   ) }  {user.gender}
// </Typography>

//         </Grid>
//         <Grid item display={'flex'} flexDirection={'column'} sx={{marginLeft:'40px'}} >
//         <Button variant="outlined" onClick={handleEditClick} sx={{color: '#202020',
//     fontFamily: 'Montagu Slab, sans-serif',
//     fontSize: '15px',
//     fontStyle: 'normal',
//     fontWeight: '600',
//     lineHeight: 'normal',
//     textTransform: 'capitalize',
//     border: '1px solid black',
//     padding:'10px 30px 10px 30px ',
//     marginBottom:'10px'
//     }}>Edit Details</Button>
//     <Dialog open={isEditing} onClose={handleClose}>
//          <DialogTitle sx={{color: '#000',
//     fontFamily: 'Montagu Slab, sans-serif',
//     fontSize: '20px',
//     fontStyle: 'normal',
//     fontWeight: '600',
//     lineHeight: 'normal',
//     textTransform: 'capitalize',
//     }}>Edit Profile</DialogTitle>
//         <DialogContent>
//          <Signupform user={user} onClose={handleClose}/>
//         </DialogContent> 
//       </Dialog> 
    

   
//      <Button variant="outlined" onClick={handleLogoutClick} sx={{color: '#202020',
//     fontFamily: 'Montagu Slab, sans-serif',
//     fontSize: '15px',
//     fontStyle: 'normal',
//     fontWeight: '600',
//     lineHeight: 'normal',
//     textTransform: 'capitalize',
//     border: '1px solid black',padding:'10px 30px 10px 30px '
//     }}>Logout</Button>


//         </Grid>
//         </Grid>
      
//     </Box>
   
//   );
// };

// export default Userdetails;

  
import React from 'react'
import { Typography,Grid,Button} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male'; 
import { useState } from 'react';
import { useNavigate,  } from "react-router-dom"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Signupform from '../Components/Signupform';




 function Userdetails({user}) {
  
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {

    setIsEditing(true);

  };
  const handleClose = () => {
    setIsEditing(false);
  };
 


  const history = useNavigate();

const handleLogoutClick = () => {
  // Navigate to the desired page (e.g., '/logout')
  history('/');
};

 



  return (
 
  
   
      <Grid container xs={12} sm={12} md={12} lg={12}  sx={{
      borderRadius: '20px',
      border: '5px dashed #0E9B95',
      background: '#FFF',
     
      width: 'auto',
      // height: ' 300.289px',
      height:'auto',
      // marginLeft:'500px',
      marginTop: '20px',
      marginRight:'30px',padding:'40px'}} 
      >
      <Grid item   >
      <Avatar sx={{ width:'150px',height:'150px',fontSize:'50px',marginRight:'20px'}}>{user.firstname.charAt(0).toUpperCase() + user.lastname.charAt(0).toUpperCase()}</Avatar>
      </Grid>
     <Grid item >
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

        {/* <Typography sx={{
          color: '#000',
          fontFamily: 'Montagu Slab, sans-serif',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
        }}>
           {user.gender}
        </Typography> */}
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
    <FemaleIcon fontSize="inherit" color="#0E9B9"  /> 
  ) : (
    <MaleIcon fontSize="inherit" color="#0E9B9" /> 
  ) }  {user.gender}
</Typography>

        </Grid>
        <Grid item display={'flex'} flexDirection={'column'} sx={{marginLeft:'30px'}} >
        <Button variant="outlined" onClick={handleEditClick} sx={{color: '#202020',
    fontFamily: 'Montagu Slab, sans-serif',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    textTransform: 'capitalize',
    border: '1px solid black',
    padding:'10px 30px 10px 30px ',
    marginBottom:'10px'
    }}>Edit Details</Button>
    <Dialog open={isEditing} onClose={handleClose}>
         <DialogTitle sx={{color: '#000',
    fontFamily: 'Montagu Slab, sans-serif',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    textTransform: 'capitalize',
    }}>Edit Profile</DialogTitle>
        <DialogContent>
         <Signupform user={user} onClose={handleClose}/>
        </DialogContent> 
      </Dialog> 
    

   
     <Button variant="outlined" onClick={handleLogoutClick} sx={{color: '#202020',
    fontFamily: 'Montagu Slab, sans-serif',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    textTransform: 'capitalize',
    border: '1px solid black',padding:'10px 30px 10px 30px '
    }}>Logout</Button>


        </Grid>
        </Grid>
      

  );
};

export default Userdetails;

  




