import React from 'react'
import { MdPerson, MdMail, MdKey } from 'react-icons/md'
import { Button, InputAdornment, TextField } from '@mui/material'
import {FormContainer,FormHeading,FormFields,FormActions,ActionMessage} from '../styledForm'
import Link from 'next/link'
export default function UpdateForm() {
  return (
    <FormContainer>
      <FormHeading>Update Profile</FormHeading>
      <FormFields>
      <TextField fullWidth placeholder='Username' value={''} onChange={''} InputProps={{ endAdornment: <InputAdornment position='end'><MdPerson /></InputAdornment> }} />
        <TextField fullWidth placeholder='Email' value={''} onChange={''} InputProps={{ endAdornment: <InputAdornment position='end'><MdMail /></InputAdornment> }} />
        <TextField fullWidth placeholder='Password' value={''} onChange={''} InputProps={{ endAdornment: <InputAdornment position='end'><MdKey /></InputAdornment> }} />
      </FormFields>
      <FormActions>
        <ActionMessage variant='caption'>Go to User Profile <Link href={'/dashboard/profile'} style={{ color: 'blue', borderBottom: '1px solid blue' }}>Profile</Link>  </ActionMessage>
        <Button variant='contained'>update</Button>
      </FormActions>
    </FormContainer>
  )
}
