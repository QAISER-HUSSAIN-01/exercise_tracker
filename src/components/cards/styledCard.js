import { styled, Box, Typography,Card } from '@mui/material'

export const CardContainer = styled(Card)(({ theme }) => ({
    maxWidth: '22rem',
    padding:'20px',
    display:'flex',
    flexDirection:'column',
    gap:'15px',
    ':hover':{boxShadow:'2px 2px 5px black'} 
}))

export const CardHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between'
}))

export const CardCaption = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between'
}))

export const CardBody = styled(Typography)(({ theme }) => ({
    textAlign: 'justify'
}))

export const CardDate = styled(Typography)(({ theme }) => ({
    textAlign: 'end'
}))