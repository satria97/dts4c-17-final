import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { AuthContext } from '../../components/Provider/AuthProvider';
import { signingUp } from '../../components/Utils/firebase/signup';
import { signingIn } from '../../components/Utils/firebase/signin';

import { displayToast } from '../../components/Utils/ToastNotif';
import ToastNotif from '../../components/Utils/ToastNotif';

import './index.css';

export const SignUp = () => {
  const { setUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate('');
  const signUp = async () => {
    const response = await signingUp(email, password);

    if (!response.message) {
      setUser(response.accessToken);
      const signedIn = await signingIn(email, password);
      if (!signedIn.message) {
        navigate('/');
      }
    } else {
      displayToast('Invalid username and password! ❌', 'red');
    }
  };

  function handleKey(e) {
    if (e.key === 'Enter') {
      signUp();
    }
  }

  return (
    <div className="signup-page">
      <Link href="/home" variant="body2">
        <ArrowBackOutlinedIcon className="back-btn" />
      </Link>
      <Container component="main" maxWidth="xs" onKeyDown={handleKey}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <AssignmentOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              sx={{
                '& .MuiInputLabel-root': { color: 'black' },
                '& .MuiOutlinedInput-root.Mui-focused': {
                  '& > fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                '& .MuiInputLabel-root': { color: 'black' },
                '& .MuiOutlinedInput-root.Mui-focused': {
                  '& > fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            <Button
              type="button"
              onClick={signUp}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastNotif />
    </div>
  );
};
