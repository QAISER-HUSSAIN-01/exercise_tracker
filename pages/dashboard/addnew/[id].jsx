import axios from 'axios';
import React from 'react'
import ActivityForm from '../../../src/components/activityForm'
import DashboardLayout from '../../../src/layouts/dashboardLayout/DashboardLayout'
import { url } from '../../../src/utils/url';

export async function getServerSideProps(context){
  const {id} = context.params;
  console.log(id);
  const res = await axios.get(`${url}api/exercise/${id}`);
  console.log(res);
  if (!res.status) { return { props: { exercise: '' } } }
  return {
    props: { exercise: res.data.data }
  }
}

export default function UpdateActivity({exercise}) {
  return (<ActivityForm exercise={exercise}/>)
}


UpdateActivity.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}