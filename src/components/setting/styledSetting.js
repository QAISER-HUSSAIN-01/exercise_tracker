import { Box, styled } from '@mui/material';

export const AccountContainer = styled(Box)(({ theme }) => ({
   boxShadow:'2px 2px 5px gray',
   padding:'20px',
   borderRadius:'10px',
   width:'350px',
   margin:'20px 0'
}));
export const AccountAction = styled(Box)(({ theme }) => ({
    display:'flex',
    justifyContent:'flex-end',
    marginTop:'10px'
 }));