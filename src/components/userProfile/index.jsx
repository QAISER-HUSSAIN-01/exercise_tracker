import { Button, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import { ProfileContainer} from './styledProfile';
import { ProfileContainer, FormContainer, FormHeading, FormFields, FormActions, ActionMessage } from '../styledForm';
import { MdPerson, MdMail, MdKey } from 'react-icons/md';
import { useRouter } from 'next/router';

export default function UserProfile() {
  const router = useRouter()
  const [user,setUser]= useState({username:'',email:''});
  const gotoUpdate = () => { router.push('/dashboard/profile/update')}
  useEffect(() => {
    const {username,email} = JSON.parse(localStorage.getItem('user'));
    setUser({username:username,email:email});
  }, [])
  return (
    <ProfileContainer>
      <FormContainer>
        <FormHeading>Your Profile</FormHeading>
        <FormFields>
          <TextField fullWidth disabled value={user.username} InputProps={{ endAdornment: <InputAdornment position='end'><MdPerson /></InputAdornment> }} />
          <TextField fullWidth disabled value={user.email} InputProps={{ endAdornment: <InputAdornment position='end'><MdMail /></InputAdornment> }} />
          <TextField fullWidth disabled value={'***********'} InputProps={{ endAdornment: <InputAdornment position='end'><MdKey /></InputAdornment> }} />
        </FormFields>
        <FormActions>
          <Button variant='contained' onClick={gotoUpdate}>update</Button>
        </FormActions>
      </FormContainer>
    </ProfileContainer>
  )
}
