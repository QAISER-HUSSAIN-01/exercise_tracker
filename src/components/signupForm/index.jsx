import React, { useState } from 'react'
import { FormContainer, FormHeading, FormFields, FormActions,ActionMessage } from '../styledForm';
import { Button, InputAdornment, TextField } from '@mui/material';
import {MdKey, MdMail,MdPerson } from 'react-icons/md';
import Link from 'next/link';
import useNotify from '../../utils/notifyMessage';
import axios from 'axios';
import { useRouter } from 'next/router';

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/':'https://exercise-tracker-three-psi.vercel.app/'


export default function SignupForm() {
  const {successMessage,errorMessage} = useNotify()
  const [data,setData] = useState({username:'',email:'',password:''});
  const router = useRouter();
  
  const handleChange = (e)=>{
    e.preventDefault();
    setData({...data,[e.target.name]:e.target.value});
  }
  const handleSubmit = async()=>{
    try{
      const response = await axios.post(`${url}api/signup`,data);
      console.log(response);
      if(response.status === 201){
        setData({username:'',email:'',password:''})
        router.push('/signin')
        return successMessage(response.data.message)
      }else{
        return errorMessage(response.data.message)
      }
    }catch(error){
      return errorMessage(error.message)
    }   
  }
  return (
    <FormContainer>
      <FormHeading>SIGN UP</FormHeading>
      <FormFields>
      <TextField fullWidth placeholder='Username' name='username' value={data.username} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position='end'><MdPerson /></InputAdornment> }} />
        <TextField fullWidth placeholder='Email' name='email' value={data.email} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position='end'><MdMail /></InputAdornment> }} />
        <TextField fullWidth placeholder='Password' name='password' value={data.password} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position='end'><MdKey /></InputAdornment> }} />
      </FormFields>
      <FormActions>
        <ActionMessage variant='caption'>Already have an account? please <Link href={'/signin'} style={{ color: 'blue', borderBottom: '1px solid blue' }}>signin</Link>  </ActionMessage>
        <Button variant='contained' onClick={handleSubmit}>Sign up</Button>
      </FormActions>
    </FormContainer>
  )
}
