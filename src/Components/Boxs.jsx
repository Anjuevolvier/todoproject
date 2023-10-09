import React, {useState} from 'react';
import { Box, TextField, Typography,Button,Divider,useMediaQuery,IconButton,InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"




const Boxs = () =>
{
    const history=useNavigate();
    

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const [ConfirmPassword, setConfirmPassword] = useState('');
    // const [firstname, setFirstname] = useState('');
    // const [lastname, setLastname] = useState('');
    // const [gender, setGender] = useState('');
    // const [phone, setPhone] = useState('');

    async function submit(e){
        e.preventDefault();

        try {

             await axios.post("http://localhost:8000/",{
                email,password,
            })//to request to server
            
                .then(res=>{
                    console.log("response",res)
                    if(res.data && res.data.user && res.data.user._id){
                        const userId= res.data.user._id;
                        history("/home/",{state:{userId:userId}})
                    }
                    else if(res.data==="user does not exist")
                    {
                        alert("user have not signup")
                    }
                })
                
                .catch(e =>{
                    alert("wrong details")
                    console.log(e);
               
                })
            
            }  
        catch(e){
                console.log(e);
            

            }
        }
        
    
        // catch(e){
        //     console.log(e);

        // }

    
    const [showPassword, setShowPassword] = useState(false);

 

    const togglePasswordVisibility = () => {
  
      setShowPassword((prevShowPassword) => !prevShowPassword);
  
    };
    const isMobile = useMediaQuery('(max-width:768px');
    return(
        <Box sx={{
            
            width: '500px',
            height: '520px',
            flexShrink: 0,
            borderRadius: '40px',
            backgroundColor: 'rgba(245, 222, 203, 0.80)',
            position:'absolute',
            top: '50%', // Adjust the top position
            left: '75%', // Adjust the left position
            transform: 'translate(-50%, -50%)',
            '@media (max-width: 600px)': {
                width: '90%', // Adjust width for smaller screens
                height: '450px', // Adjust height for smaller screens
                borderRadius: '20px', // Adjust borderRadius for smaller screens
                top:'70%',
                left:'50%',
                transform: 'translate(-50%,-50%)'
              }

        }}>
            <Typography style={{
                  width: '319.848px',
                  height: '75.753px',
                  flexShrink: '0',
                  color: '#000',
                  fontFamily: 'Montagu Slab',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 'normal',
                  position:'absolute',
                  top:'20%',
                  left:isMobile ? '35%':'10%',

            }}>Login with</Typography>
            <img
            src='/google.png'
            style={{
                width: isMobile ? '30px':'45.327px',
                    height: isMobile ? '30px':'45.327px',
                    flexShrink: '0',
                    position:'absolute',
                    top:'30%',
                    left:isMobile ? '35%':'10%'
            }}/>
            <img
            src='/facebook.png'
            style={{
                width: isMobile ? '30px':'45.327px',
                    height:isMobile ? '30px': '45.327px',
                    flexShrink: '0',
                    position:'absolute',
                    top:'30%',
                    left:isMobile ? '50%':'25%'
            }}/>
            {/* {isMobile ? (<Box><Divider style={{
                 marginTop:'190px',

                 marginBottom:'100px',
           
                 marginLeft:'33px',
           
                 width:'295px',
           
                 height:'1.2px',
           
                 background:'#AA8A6D',
            }}>
                <Typography  variant="body1"
                style={{
                    position: 'absolute',
                    top: '190px',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'gba(245, 222, 203, 0.80)',
                    
                    
                    fontFamily: 'Montagu Slab',                   
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',

                    padding: '0 10px',
                }}>or</Typography>
            </Divider></Box>): */}
            {isMobile ? (<Box>
                <Divider style={{
                    background: '#AA8A6D',
                    marginTop: '190px', marginBottom: '10px',width: '135px' ,
        height: '1px',marginLeft:'25px'

                }}></Divider><Typography  variant="body1"
                style={{
                    position: 'absolute',
                    top: '190px',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'gba(245, 222, 203, 0.80)',
                    
                    
                    fontFamily: 'Montagu Slab',                   
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',

                    padding: '0 10px',
                }}>or</Typography>
                <Divider style={{
                    background: '#AA8A6D',
                    marginTop: '-12px', marginBottom: '10px',width: '140px' ,
        height: '1px',marginLeft:'53%'

                }}></Divider></Box>) :
            ( <Box><Typography style={{
                  width:  '319.848px',
                  height: '75.753px',
                  flexShrink: '0',
                  color: '#000',
                  fontFamily: 'Montagu Slab',
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  lineHeight: 'normal',
                  position:'absolute',
                  top:'40%',
                  left:'11%',

            }}>or</Typography>
            <Divider style={{ marginTop: '224px', marginBottom: '10px',width: '310px' ,
        height: '1px',background: '#D1B298',marginLeft:'85px' }}></Divider></Box>)
}
            
            
             
  

             <TextField label={(<Typography style={{
                                            color: '#B4B4B4',
                                            fontFamily: 'Montagu Slab, sans-serif',
                                            fontSize: '20px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            lineHeight: 'normal'
            }}>Email</Typography>)}
            onChange={(e) => { setEmail(e.target.value) }}
            placeholder='email' variant='outlined'
            sx={{width: isMobile ? '300px' : '359.219px',
                height: '53.667px',
                flexShrink: 0,
                borderRadius: '11px',
                border: '1px solid #EEE1C3',
                background: '#FFFCF3',
                position:'absolute',
                top: isMobile ? '220px' :'250px',
                left:isMobile ? '25px' :'50px'}}>

                </TextField>
            <TextField label={(<Typography style={{
                                            color: '#B4B4B4',
                                            fontFamily: 'Montagu Slab, sans-serif',
                                            fontSize: '20px',
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            lineHeight: 'normal',
            }}>Password</Typography>)}
            onChange={(e) => { setPassword(e.target.value) }}
            placeholder='Password' variant='outlined'
            type={showPassword ? 'text' : 'password'}
            sx={{
                width: isMobile ? '300px' : '359.219px',
                height: '53.667px',
                flexShrink: 0,
                borderRadius: '11px',
                border: '1px solid #EEE1C3',
                background: '#FFFCF3',
                position:'absolute',
                top:isMobile ? '290px':'320px',
                left:isMobile ? '25px':'50px'
                
            }}
            InputProps={{

                endAdornment: (
  
                  <InputAdornment position="end">
  
                    <IconButton
  
                      onClick={togglePasswordVisibility}
  
                      edge="end"
  
                      color="transparent">
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}

                     </IconButton>

                    </InputAdornment>

),

}}>
                      </TextField>
            <Button
             onClick={submit}
                sx={{
                    width: isMobile ? '300px' : '359.219px',
                    height: '53.667px',
                flexShrink: '0',
                borderRadius: '11px',
                background: '#1B1B1B',
                position:'absolute',
                top:isMobile ? '360px' : '390px',
                left:isMobile ? '25px':'50px',
                color: '#FFF',
                fontFamily: 'Montagu Slab',
                fontSize: '15px',
                fontStyle: 'normal',
                fontWeight: '600',
                lineHeight: 'normal',
                textTransform: 'capitalize',
            }}>Continue</Button>
            <Typography sx={{
                position:'absolute',
                top:'445px',
                left:'100px'

            }}>OR</Typography>

            <Link to="/signup" style={{ position: 'absolute', top: '445px', left: '140px' }}>Signup </Link>
            <Typography style={{
                width: '200.556px',
                height: '50.343px',
                flexShrink: '0',
                color: '#000',
                textAlign: 'center',
                fontFamily: 'Montagu Slab',
                fontSize: '10px',
                fontStyle: 'normal',
                fontWight: '400',
                lineHeight: 'normal',
                position:'absolute',
                top:isMobile ?'93%':'90%',
                left:isMobile ?'20%':'10%'
            }}>By signing in you are agreeing to our</Typography>
            <Typography style={{ 
                width: '200.556px',
                height: '50.343px',
                flexShrink: '0',
                color: '#000',
                fontFamily: 'Montagu Slab',
                fontSize: '10px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
                // textDecorationLine: 'underline',
                position:'absolute',
                top:isMobile ?'95%':'90%',
                left:isMobile ?'20%':'49%'

            }}>
            <span style={{ textDecoration: 'underline' }}>Terms and Conditions &nbsp;</span>
            <span style={{ textDecorationLine: 'none' }}>&</span>
            <span style={{ textDecorationLine: 'underline' }}> Privacy Policy</span>
            </Typography>
            

        </Box>
    )
}
export default Boxs
