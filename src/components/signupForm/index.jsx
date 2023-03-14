import React, { useState } from 'react'
import { FormContainer, FormHeading, FormFields, FormActions,ActionMessage } from '../styledForm';
import { Button, InputAdornment, TextField, CircularProgress } from '@mui/material';
import {MdKey, MdMail,MdPerson } from 'react-icons/md';
import Link from 'next/link';
import useNotify from '../../hooks/useNotify';
import axios from 'axios';
import { useRouter } from 'next/router';
import {url} from '../../utils/url'


export default function SignupForm() {
  const [progress, setProgress] = useState(false);
  const {successMessage,errorMessage} = useNotify()
  const [data,setData] = useState({username:'',email:'',password:''});
  const router = useRouter();
  const handleChange = (e)=>{
    e.preventDefault();
    setData({...data,[e.target.name]:e.target.value.toLowerCase()});
  }
  const handleSubmit = async()=>{
    setProgress(true)
    try{
      const response = await axios.post(`${url}api/signup`,data);
      console.log(response);
      if(response.data.success){
        setData({username:'',email:'',password:''})
        await router.push('/signin')
        return successMessage(response.data.message)
      }else{
        return errorMessage(response.data.message)
      }
    }catch(error){
      errorMessage(error.response.data.message);
    }   
    setProgress(false)
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
        {progress ? <CircularProgress size={20}/> : <Button variant='contained' onClick={handleSubmit}>Sign up</Button> }
      </FormActions>
    </FormContainer>
  )
}
