import { Button, InputAdornment, TextField } from '@mui/material';
import React from 'react';
// import { ProfileContainer} from './styledProfile';
import { ProfileContainer, FormContainer, FormHeading, FormFields, FormActions, ActionMessage } from '../styledForm';
import { MdPerson, MdMail, MdKey } from 'react-icons/md';
import { useRouter } from 'next/router';
export default function UserProfile() {
  const router = useRouter()
  const gotoUpdate = () => { router.push('/dashboard/profile/update') }
  return (
    <ProfileContainer>
      <FormContainer>
        <FormHeading>Your Profile</FormHeading>
        <FormFields>
          <TextField fullWidth disabled value={'Qaiser Hussain'} InputProps={{ endAdornment: <InputAdornment position='end'><MdPerson /></InputAdornment> }} />
          <TextField fullWidth disabled value={'merndeveloper01@gmail.com'} InputProps={{ endAdornment: <InputAdornment position='end'><MdMail /></InputAdornment> }} />
          <TextField fullWidth disabled value={'***********'} InputProps={{ endAdornment: <InputAdornment position='end'><MdKey /></InputAdornment> }} />
        </FormFields>
        <FormActions>
          <Button variant='contained' onClick={gotoUpdate}>update</Button>
        </FormActions>
      </FormContainer>
    </ProfileContainer>

  )
}
