import React from 'react'
import { FormContainer, FormHeading, FormFields, FormActions,ActionMessage } from '../styledForm';
import { Button, InputAdornment, TextField } from '@mui/material';
import {MdKey, MdMail,MdPerson } from 'react-icons/md';
import Link from 'next/link';

export default function SignupForm() {
  return (
    <FormContainer>
      <FormHeading>SIGN UP</FormHeading>
      <FormFields>
      <TextField fullWidth placeholder='Username' value={''} onChange={''} InputProps={{ endAdornment: <InputAdornment position='end'><MdPerson /></InputAdornment> }} />
        <TextField fullWidth placeholder='Email' value={''} onChange={''} InputProps={{ endAdornment: <InputAdornment position='end'><MdMail /></InputAdornment> }} />
        <TextField fullWidth placeholder='Password' value={''} onChange={''} InputProps={{ endAdornment: <InputAdornment position='end'><MdKey /></InputAdornment> }} />
      </FormFields>
      <FormActions>
        <ActionMessage variant='caption'>Already have an account? please <Link href={'/signin'} style={{ color: 'blue', borderBottom: '1px solid blue' }}>signin</Link>  </ActionMessage>
        <Button variant='contained'>Sign up</Button>
      </FormActions>
    </FormContainer>
  )
}
