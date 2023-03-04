import { styled, Box, Typography } from '@mui/material'

export const ProfileContainer = styled(Box)(({ theme }) => ({
    width:'100%',
    background:'yellow'
}))
export const Profile = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '500px',
    padding: '20px',
    boxShadow: '1px 1px 3px lightgrey,-1px -1px 3px lightgrey',
    borderRadius: '10px'
}))
export const ProfileImage = styled(Box)(({ theme }) => ({
    border: '2px solid lightgrey',
    borderRadius: '50%',
    height: '200px',
    width: '200px',
}))
export const Detail = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:'100%',
    textAlign:'center'
}))
export const Left = styled(Typography)(({ theme }) => ({
    // width:'max-content',
    marginBottom: '10px',
    textAlign:'start',
    width:'50%',


}))
export const Right = styled(Typography)(({ theme }) => ({
    width:'50%',
    marginBottom: '10px'
}))