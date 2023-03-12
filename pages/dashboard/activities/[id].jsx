import axios from 'axios';
import React from 'react';
import { url } from '../../../src/utils/url';
import DashboardLayout from "../../../src/layouts/dashboardLayout/DashboardLayout";
import ActivityCard from '../../../src/components/cards';
import { Box, Button, IconButton, Modal, Typography } from '@mui/material';
import { MdDelete, MdEdit, MdUpdate } from 'react-icons/md';
import { useRouter } from 'next/router';
import useNotify from '../../../src/hooks/useNotify';
import useModal from '../../../src/hooks/useModal';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await axios.get(`${url}api/exercise/${id}`);
  console.log(res);
  if (!res.status) { return { props: { detail: '' } } }
  return {
    props: { detail: res.data.data }
  }
}

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
export default function ActivityDetail({ detail }) {
  const router = useRouter();
  // const {successMessage,errorMessage} = useNotify();
  const {handleDelete,handleOpen,handleClose,open} = useModal();
  console.log(open);
  const handleEdit = (id) => { 
    router.push(`/dashboard/addnew/${id}`)
  }
  // const handleDelete = async (id) => {
  //   try {
  //     const {data} = await axios.delete(`${url}api/exercise/${id}`)
  //     if(data.success){
  //       successMessage('Activity Deleted')
  //       router.push('/dashboard/activities')
  //     }else{
  //       errorMessage('Activity Not Deleted')
  //     }
  //   } catch (error) {
  //     errorMessage(error.message)
  //   }
  // }
  return (
    <div>
      <div>ActivityDetail</div>

      {detail ?
        <>
          <div>
            <IconButton onClick={() => handleEdit(detail._id)}><MdEdit /></IconButton>
            <IconButton onClick={() => handleOpen(detail._id)}><MdDelete /></IconButton>
          </div>
          <ActivityCard card={detail} />
        </>
        :
        "not found"
      }
       <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete activity ? 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, display:'flex',gap:'20px',justifyContent:'end' }}>
            <Button variant='outlined' color='info' onClick={handleClose}> Cancel </Button>
            <Button variant='contained' color='error' onClick={handleDelete}>Delete</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
    </div>
  )
}

ActivityDetail.getLayout = function (page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};