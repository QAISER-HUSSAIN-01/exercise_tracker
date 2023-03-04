import React, { useState } from 'react'
import { FormContainer, FormHeading, FormFields, FormActions, ActionMessage, FieldsPair } from '../styledForm'
import { MdPerson, MdWatch } from 'react-icons/md'
import { Button, InputAdornment, MenuItem, TextField } from '@mui/material'
import Link from 'next/link'
import useNotify from '../../utils/notifyMessage';


export default function ActivityForm() {
  const { successMessage } = useNotify()
  const [data, setData] = useState({ name: '', type: '', duration: '', date: '', description: '' });
  const handleChange = (e) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleSubmit = () => {
    console.log(data);
    successMessage('Added New Activity Successfully')
  }
  return (
    <FormContainer>
      <FormHeading>Add Activity</FormHeading>
      <FormFields>
        <FieldsPair>
          <TextField fullWidth type='text' name='name' placeholder='Name' value={data.name} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position='end'><MdPerson /></InputAdornment> }} />
          <TextField fullWidth name='type' placeholder='Activity Type' defaultValue={'Activity Type'} value={data.type} onChange={handleChange} select >
            <MenuItem value={'hike'}>Hike</MenuItem>
            <MenuItem value={'ride'}>Ride</MenuItem>
            <MenuItem value={'swimming'}>Swimming</MenuItem>
            <MenuItem value={'running'}>Running</MenuItem>
          </TextField>
        </FieldsPair>
        <FieldsPair>
          <TextField fullWidth name='duration' type='number' placeholder='Duration(min)' value={data.duration} onChange={handleChange} InputProps={{ endAdornment: <InputAdornment position='end'><MdWatch /></InputAdornment> }} />
          <TextField fullWidth name='date' type='date' placeholder='Date' value={data.date} onChange={handleChange} />
        </FieldsPair>
        <TextField fullWidth name='description' type='text' placeholder='Description' value={data.description} onChange={handleChange} multiline rows={5} />
      </FormFields>
      <FormActions>
        <ActionMessage variant='caption'>Go to User Profile <Link href={'/dashboard/profile'} style={{ color: 'blue', borderBottom: '1px solid blue' }}>Profile</Link>  </ActionMessage>
        <Button variant='contained' onClick={handleSubmit}>Add</Button>
      </FormActions>
    </FormContainer>
  )
}
