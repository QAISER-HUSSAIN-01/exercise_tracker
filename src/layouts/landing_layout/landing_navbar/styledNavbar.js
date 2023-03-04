import {Box, styled} from '@mui/material';

export const StyledNavbar = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'0px 40px',
    height:'6rem',
}))

export const Logo = styled(Box)(({theme})=>({
    fontSize :'2rem',
    zIndex:'1',
    cursor:'pointer'
}))

export const NavbarButtons = styled(Box)(({theme})=>({
    display:'flex',
    gap:'20px',
    zIndex:1
}))
