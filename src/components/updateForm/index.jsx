import React, { useEffect, useState } from 'react'
import { MdPerson, MdMail, MdKey } from 'react-icons/md'
import { Button, InputAdornment, TextField, CircularProgress } from '@mui/material'
import { FormContainer, FormHeading, FormFields, FormActions, ActionMessage } from '../styledForm'
import Link from 'next/link'
import useNotify from '../../hooks/useNotify';
import axios from 'axios'
import { url } from '../../utils/url'
import { useRouter } from 'next/router'
export default function UpdateForm() {
  const router = useRouter()
  const { successMessage, errorMessage } = useNotify();
  const [user, setUser] = useState({ id: '', username: '', email: "", password: '', newpassword: '' });
  const [progress, setProgress] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const handleSubmit = async () => {
    setProgress(true)
    try {
      const { data } = await axios.patch(`${url}api/user/${user.id}`, user)
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.data))
        successMessage('User updated')
        await router.push('/dashboard/profile')
      } else {
        errorMessage('User Not Updated')
      }
    } catch (error) {
      errorMessage(error.message)
    }
    setProgress(false)
  }

  useEffect(() => {
    const userDetail = JSON.parse(localStorage.getItem('user'));
    const { _id, username, email } = userDetail;
    setUser({ id: _id, username: username, email: email, password: '' })
  }, [])

  return (
    <FormContainer>
      <FormHeading>Update Profile</FormHeading>
      <FormFields>
        <TextField fullWidth placeholder='Username' name='username' value={user.username} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position='end'><MdPerson /></InputAdornment> }} />
        <TextField fullWidth placeholder='Email' name='email' value={user.email} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position='end'><MdMail /></InputAdornment> }} />
        <TextField fullWidth placeholder='Old Password' name='password' value={user.password} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position='end'><MdKey /></InputAdornment> }} />
        <TextField fullWidth placeholder='New Password' name='newpassword' value={user.newpassword} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position='end'><MdKey /></InputAdornment> }} />
      </FormFields>
      <FormActions>
        <ActionMessage variant='caption'>Go to User Profile <Link href={'/dashboard/profile'} style={{ color: 'blue', borderBottom: '1px solid blue' }}>Profile</Link>  </ActionMessage>
        {progress ? (<CircularProgress size={20} />) : (<Button variant='contained' onClick={handleSubmit}>update</Button>)}
      </FormActions>
    </FormContainer>
  )
}
