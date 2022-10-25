import { useContext, useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { AuthContext } from '../../components/Provider/AuthProvider';
import { signingIn } from '../../components/Utils/firebase/signin';

import './index.css';

import { displayToast } from '../../components/Utils/ToastNotif';
import ToastNotif from '../../components/Utils/ToastNotif';

export const Login = () => {
  const { setUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    const signedIn = await signingIn(email, password);
    if (!signedIn.message) {
      setUser(signedIn.accessToken);
    } else {
      console.error(signedIn.message);
      displayToast('Invalid username and password! ❌', 'red');
    }
  };

  return (
    <div className="login-page">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#000' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
              onClick={signIn}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
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
