import { Box, styled } from '@mui/material';

export const HeroWrapper = styled(Box)(({ theme }) => ({
    margin:'100px 0',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    gap:'40px'
}));

export const Left = styled(Box)(({ theme }) => ({
    flex:'0.5',
    maxWidth:'300px'
}));
export const Right = styled(Box)(({ theme }) => ({
    flex:'0.5',
    maxWidth:'300px'
}));
export const Heading = styled(Box)(({ theme }) => ({
    fontSize: '2rem',
    zIndex: 1
}));

export const Text = styled(Box)(({ theme }) => ({
    fontSize: '1rem',
    textAlign: 'justify',
    zIndex: 1
}));

export const HeroButton = styled(Box)(({ theme }) => ({
    marginTop: '20px'
}));

