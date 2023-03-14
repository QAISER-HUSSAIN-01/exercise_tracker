import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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

export default function DeleteModal({open,handleClose,handleDelete}) {

  return (
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want to delete ? 
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2, display:'flex',gap:'20px',justifyContent:'end' }}>
          <Button variant='outlined' color='info' onClick={handleClose}> Cancel </Button>
          <Button variant='contained' color='error' onClick={handleDelete}>Delete</Button>
        </Typography>
      </Box>
    </Modal>
  </div>
  );
}