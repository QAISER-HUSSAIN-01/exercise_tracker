import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { StyledNavbar,NavbarButtons,Logo } from './styledNavbar';

export default function LandingNavbar() {
  const router = useRouter();
  const gotoSignin = ()=>{router.push('/signin')}
  const gotoSignup = ()=>{router.push('/signup')}
  const gotoHome = ()=>{router.push('/')}
  return (
    <StyledNavbar>
        <Logo onClick={gotoHome}>Fitness</Logo>
        <NavbarButtons>
            <Button sx={{color:'black'}} variant='outlined' color='inherit' size='small' onClick={gotoSignup}>sign up</Button>
            <Button sx={{color:'black'}} variant='outlined' color='inherit' size='small' onClick={gotoSignin}>sign in</Button>
        </NavbarButtons>
    </StyledNavbar>
  )
}
