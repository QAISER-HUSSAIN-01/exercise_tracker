import axios from 'axios';
import React from 'react';
import { url } from '../../../src/utils/url';
import DashboardLayout from "../../../src/layouts/dashboardLayout/DashboardLayout";
import ActivityCard from '../../../src/components/cards';
import { IconButton } from '@mui/material';
import { MdDelete, MdEdit, MdUpdate } from 'react-icons/md';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await axios.get(`${url}api/exercise/${id}`);
  console.log(res);
  if (!res.status) { return { props: { detail: '' } } }
  return {
    props: { detail: res.data.data }
  }
}

export default function ActivityDetail({ detail }) {
  const handleEdit = () => { }
  const handleDelete = async (id) => {
    const res = await axios.delete(`${url}api/exercise/${id}`)
    console.log(res);
  }
  const handleUpdate = () => { }
  return (
    <div>
      <div>ActivityDetail</div>

      {detail ?
        <>
          <div>
            <IconButton onClick={() => handleEdit(detail._id)}><MdEdit /></IconButton>
            <IconButton onClick={() => handleDelete(detail._id)}><MdDelete /></IconButton>
            <IconButton onClick={() => handleUpdate(detail._id)}><MdUpdate /></IconButton>
          </div>
          <ActivityCard card={detail} />
        </>
        :
        "not found"
      }
    </div>
  )
}

ActivityDetail.getLayout = function (page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};