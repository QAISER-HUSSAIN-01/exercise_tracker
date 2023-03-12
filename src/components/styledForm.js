import {styled,Box, Typography} from '@mui/material';


export const ProfileContainer = styled(Box)(({ theme }) => ({
    // width:'100%',
    // background:'yellow',
    // textAlign:'center'
    // marginTop:'50px',
    // zIndex:'999'
}))
export const FieldsPair = styled(Box)(({theme})=>({
    display:'flex',
    gap:'20px',
    width:'100%'

}))
export const FormContainer = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:'20px',
    padding:'20px',
    maxWidth:'600px',
    boxShadow:'1px 1px 3px lightgrey,-1px -1px 3px lightgrey',
    borderRadius:'10px',
    margin:'40px auto 0 auto',
    // backgroundColor:'white',
    zIndex:1,
}))

export const FormHeading = styled(Box)(({theme})=>({
    fontSize:'1.5rem'
}))

export const FormFields = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:'20px',
    width:'100%'
}))
export const FormActions = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%'
}))

export const ActionMessage = styled(Typography)(({theme})=>({
    textAlign:'justify'
}))