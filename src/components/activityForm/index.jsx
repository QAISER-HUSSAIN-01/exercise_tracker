import React from 'react'
import { FormContainer, FormHeading, FormFields, FormActions, ActionMessage, FieldsPair } from '../styledForm'
import { MdPerson,MdWatch } from 'react-icons/md'
import { Button, InputAdornment, MenuItem, TextField } from '@mui/material'
import Link from 'next/link'

export default function ActivityForm() {
  return (
    <FormContainer>
      <FormHeading>Add Activity</FormHeading>
      <FormFields>
        <FieldsPair>
          <TextField fullWidth type='text' placeholder='Name' value={''} onChange={''} InputProps={{ endAdornment: <InputAdornment position='end'><MdPerson /></InputAdornment> }} />
          <TextField fullWidth placeholder='Activity Type' defaultValue={'Activity Type'} value={''} onChange={''} select >
            <MenuItem>Hike</MenuItem>
            <MenuItem>Ride</MenuItem>
            <MenuItem>Swimming</MenuItem>
            <MenuItem>Running</MenuItem>
          </TextField>
        </FieldsPair>
        <FieldsPair>
          <TextField fullWidth type='number' placeholder='Duration(min)' value={''} onChange={''} InputProps={{ endAdornment: <InputAdornment position='end'><MdWatch /></InputAdornment> }}  />
          <TextField fullWidth type='date' placeholder='Date' value={''} onChange={''} />
        </FieldsPair>
        <TextField fullWidth type='text' placeholder='Description' value={''} onChange={''} multiline rows={5}/>
      </FormFields>
      <FormActions>
        <ActionMessage variant='caption'>Go to User Profile <Link href={'/dashboard/profile'} style={{ color: 'blue', borderBottom: '1px solid blue' }}>Profile</Link>  </ActionMessage>
        <Button variant='contained'>Add</Button>
      </FormActions>
    </FormContainer>
  )
}
