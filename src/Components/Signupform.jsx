import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Typography,
  Button,
  Box,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import icons
import { useNavigate, } from "react-router-dom";

const Signupform = ({ user,onClose }) => {
  // const Female ="female";
  // const Male ="male";
  console.log(user);
  const [isEditing, setIsEditing] = useState(user ? true : false); // Check if userId is provided to determine edit mode

  const history = useNavigate();



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  console.log(gender);
  const [phone, setPhone] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (isEditing) {
      //  axios.get(`http://localhost:8000/user/${user._id}`)
      //     .then((response) => {

      setEmail(user.email);
      setPassword(user.password);
      //  setConfirmPassword(user.ConfirmPassword);
      setFirstname(user.firstname);
      setLastname(user.lastname);
      setGender(user.gender);
      setPhone(user.phone);


      //  })
      // .catch((error) => {
      //        console.error("Error fetching user details:", error);
      //   });
    }
  }, [])



  async function submit(e) {
    e.preventDefault();

   

    // Check if password contains at least 8 characters
    if (password.length < 8) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    // Validate phone number using regex (10-digit number)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError(true);
      return;
    } else {
      setPhoneError(false);
    }

    if(isEditing){ 
       try {
      //Send a PUT request to update the user's profile
      await axios.put(`http://localhost:8000/user/${user._id}`, {
        firstname,
        lastname,
        email,
        password,
        // ConfirmPassword,
        phone,
        gender,
      });
      onClose();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  }
    else {
       // Check if password and confirm password match
    if (password !== ConfirmPassword) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }

    try {
      await axios.post("http://localhost:8000/signup", {
        email,
        password,
        // ConfirmPassword,
        firstname,
        lastname,
        gender,
        phone,
      })
        .then((res) => {
          console.log("response", res);
          if (res.data === "exist") {
            setRegistrationMessage("User already exists");
          } else if (res.data === "not exist") {
            setRegistrationMessage("User successfully registered");
            // Redirect after a delay
            setTimeout(() => {
              history("/");
            }, 2000); // Delay for 2 seconds
          }
        })
        .catch((e) => {
          setRegistrationMessage("Registration failed");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }

      
    }
  }
  
  const handleCancelClick = () => {
    onClose();
  };

  return (

    <Grid container
      justifyContent={'center'}
      alignItems={'center'}
      spacing={1}
    // overflow={'hidden'}
    >

      <Grid item
        xs={12}

        sm={12}

        md={12}

        lg={12}

        display={'flex'}

        gap={{ xs: '10px', lg: '20px' }}

        flexDirection={{ xs: 'column', md: 'row', lg: 'row' }}// Set initial layout direction to row


      >
        <TextField
          onChange={(e) => setFirstname(e.target.value)}
          name="firstname"
          value={firstname}
          label={
            <Typography

              sx={{

                color: '#B4B4B4',
                fontFamily: 'Montagu Slab, sans-serif',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal', overflow: 'hidden'
              }}


            >
              First name
            </Typography>

          }

          sx={{

            borderRadius: '11px',
            border: '1px solid #EEE1C3',
            background: '#FFFCF3',


          }}

          id="outlined-size-small"

          size="small"

          // Set flex to 1 to make the width equal

          flex={1}

        />

        <TextField

          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
          name="lastname"

          label={

            <Typography

              sx={{

                color: '#B4B4B4',
                fontFamily: 'Montagu Slab, sans-serif',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 'normal'

              }}

            >

              Last name

            </Typography>

          }

          sx={{

            borderRadius: '11px',
            border: '1px solid #EEE1C3',
            background: '#FFFCF3',
          }}

          id="outlined-size-small"

          size="small"

          // Set flex to 1 to make the width equal

          flex={1}

        />

      </Grid>


      <Grid item xs={12} sm={12} md={12} lg={12} >

        <TextField
          value={email}
          label={(<Typography sx={{
            color: '#B4B4B4',
            fontFamily: 'Montagu Slab, sans-serif',
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal'
          }}>Email</Typography>)}
          onChange={(e) => { setEmail(e.target.value) }}
          // placeholder='email'  variant='outlined'
          id="outlined-size-small"
          size="small"
          error={emailError}
          helperText={emailError ? "Invalid email address" : ""}
          sx={{

            width: '100%',
            // width: '465.219px',
            // height: '54.667px',
            flexShrink: 0,
            borderRadius: '11px',
            border: '1px solid #EEE1C3',
            background: '#FFFCF3',
            // overflow:'hidden'
            //   marginLeft:'30px',
            //   marginTop:'5px'

          }}>

        </TextField>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}  >

        <TextField
          value={password}
          label={(<Typography sx={{
            color: '#B4B4B4',
            fontFamily: 'Montagu Slab, sans-serif',
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal'
          }}>Password</Typography>)}
          onChange={(e) => { setPassword(e.target.value) }}
          // placeholder='password'  variant='outlined'
          id="outlined-size-small"
          size="small"
          type={showPassword ? "text" : "password"} // Toggle password visibility
          error={passwordError}
          helperText={
            passwordError
              ? "Password must be at least 8 characters long"
              : ""
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={togglePasswordVisibility}
                  tabIndex={-1}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            // width: '465.219px',
            // height: '54.667px',
            width: '100%',
            flexShrink: 0,
            borderRadius: '11px',
            border: '1px solid #EEE1C3',
            background: '#FFFCF3',
            //   marginLeft:'30px',
            //   marginTop:'5px'

          }}>

        </TextField>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} >

        <TextField
          value={ConfirmPassword}
          label={(<Typography sx={{
            color: '#B4B4B4',
            fontFamily: 'Montagu Slab, sans-serif',
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal'
          }}>Confirm Password</Typography>)}
          onChange={(e) => { setConfirmPassword(e.target.value) }}
          // placeholder='email'  variant='outlined'
          id="outlined-size-small"
          size="small"
          type={showPassword ? "text" : "password"} // Toggle password visibility
          error={passwordError}
          helperText={passwordError ? "Passwords do not match" : ""}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={togglePasswordVisibility}
                  tabIndex={-1}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            // width: '465.219px',
            // height: '54.667px',
            width: '100%',
            flexShrink: 0,
            borderRadius: '11px',
            border: '1px solid #EEE1C3',
            background: '#FFFCF3',
            //   marginLeft:'30px',
            //   marginTop:'5px'

          }}>

        </TextField>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} >

        <TextField
          value={phone}
          label={(<Typography sx={{
            color: '#B4B4B4',
            fontFamily: 'Montagu Slab, sans-serif',
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal'
          }}>Mobile Number</Typography>)}
          onChange={(e) => { setPhone(e.target.value) }}
          // placeholder='phone'  variant='outlined'
          id="outlined-size-small"
          size="small"
          error={phoneError}
          helperText={phoneError ? "Invalid phone number" : ""}
          sx={{

            width: '100%',

            flexShrink: 0,
            borderRadius: '11px',
            border: '1px solid #EEE1C3',
            background: '#FFFCF3',

          }}>

        </TextField>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} >

        <FormControl fullWidth >

          <InputLabel id="demo-simple-select-label" sx={{

            color: '#B4B4B4',
            fontFamily: 'Montagu Slab, sans-serif',
            fontSize: '15px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal'

          }}>Gender</InputLabel>

          <Select

            value={gender}


            onChange={(e) => setGender(e.target.value)}

            sx={{

              // width: '465.219px',
              // height: '54.667px',
              width: '100%',
              height: '37px',
              flexShrink: 0,
              borderRadius: '11px',
              border: '1px solid #EEE1C3',
              background: '#FFFCF3',

              // marginTop: '16px',

              // padding: '0',

            }}

          >

            <MenuItem value="">Select Gender</MenuItem>

            <MenuItem value="male">Male</MenuItem>

            <MenuItem value="female">Female</MenuItem>

            <MenuItem value="other">Other</MenuItem>

          </Select>

        </FormControl>

      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} sx={{ paddingBottom: '20px' }}>
        {isEditing ? (
          <Box>
            <Button
              onClick={submit}
              sx={{
                maxwidth: '465.219px',
                width: '100%',
                height: '37.667px',
                flexShrink: '0',
                borderRadius: '11px',
                background: '#1B1B1B',
                marginBottom: '5px',
                //   marginLeft:'30px',
                color: '#FFF',
                fontFamily: 'Montagu Slab',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                textTransform: 'capitalize',
              }}>Save</Button>
            <Button
              onClick={handleCancelClick}
              sx={{
                maxwidth: '465.219px',
                width: '100%',
                height: '37.667px',
                flexShrink: '0',
                borderRadius: '11px',
                background: '#1B1B1B',
                //   marginTop:'5px',
                //   marginLeft:'30px',
                color: '#FFF',
                fontFamily: 'Montagu Slab',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                textTransform: 'capitalize',
              }}>Cancel</Button>
          </Box>) : (<Button
            onClick={submit}
            sx={{
              maxwidth: '465.219px',
              width: '100%',
              height: '37.667px',
              flexShrink: '0',
              borderRadius: '11px',
              background: '#1B1B1B',
              //   marginTop:'5px',
              //   marginLeft:'30px',
              color: '#FFF',
              fontFamily: 'Montagu Slab',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '600',
              lineHeight: 'normal',
              textTransform: 'capitalize',
            }}>Sign Up</Button>)}

      </Grid>


      <Typography>{registrationMessage}</Typography>

    </Grid>
  )
}
export default Signupform
