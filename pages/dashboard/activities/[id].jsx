import axios from 'axios';
import React from 'react';
import { url } from '../../../src/utils/url';
import DashboardLayout from "../../../src/layouts/dashboardLayout/DashboardLayout";
import Detail from '../../../src/components/cards/detail';
import { Typography } from '@mui/material';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await axios.get(`${url}api/exercise/${id}`);
  if (!res.status) { return { props: { detail: '' } } }
  return {
    props: { detail: res.data.data }
  }
}

export default function ActivityDetail({ detail }) {

  return (
    <div>
      <Typography component={'div'} variant='h5' padding={2}>ActivityDetail</Typography>
      {detail ?  
          <Detail card={detail} />
        :
        "not found"
      } 
    </div>
  )
}

ActivityDetail.getLayout = function (page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};