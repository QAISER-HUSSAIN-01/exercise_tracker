import React, { useState } from 'react';
import { FormContainer, FormHeading, FormFields, FormActions,ActionMessage } from '../styledForm';
import { Button, InputAdornment, TextField } from '@mui/material';
import {MdKey, MdMail} from 'react-icons/md';
import Link from 'next/link';
import useNotify from '../../utils/notifyMessage';
export default function SigninForm() {
  const {successMessage} = useNotify()
    const [data,setData] = useState({email:'',password:''});
    const handleChange = (e)=>{
      e.preventDefault();
      setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit = ()=>{
      console.log(data);
      successMessage('Logged In Successfully')
    }
  return (

    <FormContainer component={'form'}>
      <FormHeading>SIGN IN</FormHeading>
      <FormFields>
        <TextField fullWidth placeholder='Email' name='email' value={data.email} onChange={handleChange} InputProps={{endAdornment:<InputAdornment position='end'><MdMail /></InputAdornment>}}/>
        <TextField fullWidth placeholder='Password' name='password' value={data.password} onChange={handleChange} InputProps={{endAdornment:<InputAdornment position='end'><MdKey /></InputAdornment>}}/>
      </FormFields>
      <FormActions>
        <ActionMessage variant='caption'>Do not have an account? please <Link href={'/signup'} style={{color:'blue',borderBottom:'1px solid blue'}}>signup</Link>  </ActionMessage>
        <Button variant='contained' onClick={handleSubmit}>Sign in</Button>
      </FormActions>
    </FormContainer>
 
 )
}
