import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Logo from '../../assets/img/logo.svg'

import './index.css';

export default function HomePage() {
  return (
    <div className="home">
      <img src={Logo} alt="logo" className="logo" />
      <Typography variant="h6" gutterBottom>
        daily digestible news
      </Typography>
      <Typography variant="h1" gutterBottom>
        clipping.id
      </Typography>
      <Stack spacing={2} direction="row">
        <Button variant="contained">
          <Link to="/login">Sign In</Link>
        </Button>
        <Button variant="contained">
          <Link to="/signup">Sign Up</Link>
        </Button>
      </Stack>
    </div>
  );
}
