import React, { useState } from 'react'
import { MdPerson, MdMail, MdKey } from 'react-icons/md'
import { Button, InputAdornment, TextField } from '@mui/material'
import {FormContainer,FormHeading,FormFields,FormActions,ActionMessage} from '../styledForm'
import Link from 'next/link'
import useNotify from '../../utils/notifyMessage';
export default function UpdateForm() {
  const {successMessage} = useNotify()
  const [data,setData] = useState({image:'',username:'',email:'',password:''});
  const handleChange = (e)=>{
    e.preventDefault();
    setData({...data,[e.target.name]:e.target.value});
  }
  const handleSubmit = ()=>{
    console.log(data);
    successMessage('Updated Successfully')
  }
  return (
    <FormContainer>
      <FormHeading>Update Profile</FormHeading>
      <FormFields>
      <TextField fullWidth placeholder='Username' name='username' value={data.username} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position='end'><MdPerson /></InputAdornment> }} />
        <TextField fullWidth placeholder='Email' name='email' value={data.email} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position='end'><MdMail /></InputAdornment> }} />
        <TextField fullWidth placeholder='Password' name='password' value={data.password} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position='end'><MdKey /></InputAdornment> }} />
      </FormFields>
      <FormActions>
        <ActionMessage variant='caption'>Go to User Profile <Link href={'/dashboard/profile'} style={{ color: 'blue', borderBottom: '1px solid blue' }}>Profile</Link>  </ActionMessage>
        <Button variant='contained' onClick={handleSubmit}>update</Button>
      </FormActions>
    </FormContainer>
  )
}
