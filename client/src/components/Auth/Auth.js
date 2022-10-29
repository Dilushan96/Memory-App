import React ,{useState}from 'react'
import {Avatar,Button,Paper,Grid,Typography,Container, Icon} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login';
import icon from './icon';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';
import Input from './Input';
const Auth = () => {
    const classes = useStyles();
    const [showPassword, setPassword] =useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleShowPassword = () =>setPassword ((prevShowPassword)=>!prevShowPassword);
    const handleSubmit =() =>{

    };
    const handleChange = () =>{

    };

  const switchMode = () =>{
    setIsSignup((prevIsSignup)=> !prevIsSignup);
    handleShowPassword(false);


  };
  const googleSuccess = async(res) =>{
    const result = res?.profileObj; 
    const token = res?.tokenId;

    try {
      dispatch( {type: 'AUTH', data:{ result, token}});
      navigate('/');
      
    } catch (error) {
      console.log (error);
      
    }
  };
  const googleFailure = (error) =>{
      console.log(error);

      console.log ('Google Sign In was unsuccessful. Try Again Later');
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.Paper} elevation={3}>
          <Avatar className={classes.avatar}>
              <LockOutlinedIcon/>
          </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign  Up': 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                 <Input name = "firstName" label ="First Name" handleChange={handleChange} autoFocus half/>
                 <Input name = "firstName" label ="First Name" handleChange={handleChange} half/>
                
                </>

              )
            }
            <Input name= "email" label ="Email Address" handleChange={handleChange} type ="email"/>
            <Input name= "password" label="Password" handleChange={handleChange} type ={showPassword ? "text":"password"} handleShowPassword={handleShowPassword}/>

            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type ="password"/>}
          </Grid>
          <GoogleLogin
              clientId="341524259499-lktm94abksfdcnlhi3ao0vf4nrpneho7"
              render={(renderProps) =>(
                <Button 
                className ={classes.googleButton} 
                color ="primary" 
                fullWidth 
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled} 
                startIcon={<Icon/>} 
                variant="contained">
                Google Sign In
                </Button>

              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Button>
          <Grid container justify="flex-end" >
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ?'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </Button>

            </Grid>

          </Grid>

        </form>
      </Paper>

    </Container>
  );
};

export default Auth;