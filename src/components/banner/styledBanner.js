import { Box, styled } from '@mui/material';

export const BannerBox = styled(Box)(({ theme }) => ({
    // maxHeight: '650px',
    paddingTop:'150px',
    maxWidth: '350px',
    display: 'flex',
    flexDirection: 'column',
}));

export const Heading = styled(Box)(({ theme }) => ({
    fontSize: '3rem',
    zIndex: 1
}));

export const Text = styled(Box)(({ theme }) => ({
    fontSize: '1.5rem',
    textAlign: 'justify',
    zIndex: 1
}));

export const BannerButton = styled(Box)(({ theme }) => ({
    marginTop: '20px'
}));