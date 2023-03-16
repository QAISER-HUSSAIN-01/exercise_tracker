import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { StyledNavbar, NavbarButtons, Logo } from './styledNavbar';

export default function LandingNavbar() {
  const router = useRouter();
  const gotoSignin = () => { router.push('/signin') }
  const gotoSignup = () => { router.push('/signup') }
  const gotoHome = () => { router.push('/') }
  return (
    <StyledNavbar>
      <Logo onClick={gotoHome} component={'div'}>
        <Typography variant='h4'>Exercise</Typography>
        <Typography variant='caption' sx={{position:'absolute',right:'0',bottom:'-15px',letterSpacing:'2px'}}>Tracker</Typography>
      </Logo>
      <NavbarButtons>
        <Button variant='outlined' color='inherit' size='small' onClick={gotoSignup}>sign up</Button>
        <Button variant='outlined' color='inherit' size='small' onClick={gotoSignin}>sign in</Button>
      </NavbarButtons>
    </StyledNavbar>
  )
}
