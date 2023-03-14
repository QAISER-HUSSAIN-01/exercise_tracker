import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { AccountContainer, AccountAction } from './styledSetting'
// import DeleteModal from '../modal/Delete'
import useModal from '../../hooks/useModal'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SettingComponent() {
  const { handleUserDelete, handleOpen, handleClose, open } = useModal();
  const [user,setUser]= useState({id:''});
  useEffect(() => {
    const {_id} = JSON.parse(localStorage.getItem('user'));
    setUser({id:_id});
  }, [])
  return (
    <div>
      <AccountContainer>
        <Typography>yoy want to delet your account ?</Typography>
        <AccountAction><Button onClick={() => handleOpen(user.id)} variant='contained' color='error'>Delete</Button></AccountAction>
      </AccountContainer>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you want to delete yourself ?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, display: 'flex', gap: '20px', justifyContent: 'end' }}>
              <Button variant='outlined' color='info' onClick={handleClose}> Cancel </Button>
              <Button variant='contained' color='error' onClick={handleUserDelete}>Delete</Button>
            </Typography>
          </Box>
        </Modal>
      </div>
      {/* <DeleteModal handleClose={handleClose} open={open} handlDelete={userDelete}/> */}
    </div>
  )
}
