import React, { useState } from 'react';
import { FormContainer, FormHeading, FormFields, FormActions,ActionMessage } from '../styledForm';
import { Button, InputAdornment, TextField } from '@mui/material';
import {MdKey, MdMail} from 'react-icons/md';
import Link from 'next/link';
import useNotify from '../../utils/notifyMessage';
import axios from 'axios';
import {useCookies} from 'react-cookie';
import { useRouter,NextRouter } from 'next/router';

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/':'https://exercise-tracker-three-psi.vercel.app/'

export default function SigninForm() {
  const {successMessage,errorMessage} = useNotify();
  const [cookies,setCookie] = useCookies();
  const router = useRouter();

    const [data,setData] = useState({email:'',password:''});
    const handleChange = (e)=>{
      e.preventDefault();
      setData({...data,[e.target.name]:e.target.value.toLowerCase()});
    }

    const handleSubmit = async()=>{
      try {
      const response = await axios.post(`${url}api/signin`,data);
        if(response.data.success){
          setData({email:'',password:''});
          setCookie('token',response.data.token, {maxAge:60*60*24*30});
          router.push('/dashboard')
          return successMessage(response.data.message);
        }
      } catch (error) {
        console.log(error.response.data.message);
        errorMessage(error.response.data.message);
      }
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
