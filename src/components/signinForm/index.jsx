import React from 'react';
import { FormContainer, FormHeading, FormFields, FormActions,ActionMessage } from '../styledForm';
import { Button, InputAdornment, TextField } from '@mui/material';
import {MdKey, MdMail} from 'react-icons/md';
import Link from 'next/link';


export default function SigninForm() {

  return (

    <FormContainer>
      <FormHeading>SIGN IN</FormHeading>
      <FormFields>
        <TextField fullWidth placeholder='Email' value={''} onChange={''} InputProps={{endAdornment:<InputAdornment position='end'><MdMail /></InputAdornment>}}/>
        <TextField fullWidth placeholder='Password' value={''} onChange={''} InputProps={{endAdornment:<InputAdornment position='end'><MdKey /></InputAdornment>}}/>
      </FormFields>
      <FormActions>
        <ActionMessage variant='caption'>Don not have any account? please <Link href={'/signup'} style={{color:'blue',borderBottom:'1px solid blue'}}>signup</Link>  </ActionMessage>
        <Button variant='contained'>Sign in</Button>
      </FormActions>
    </FormContainer>
 
 )
}
