import axios from 'axios';
import React from 'react';
import { url } from '../../../src/utils/url';
import DashboardLayout from "../../../src/layouts/dashboardLayout/DashboardLayout";
import ActivityCard from '../../../src/components/cards';

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
      <div>ActivityDetail</div>

      {detail ?  
          <ActivityCard card={detail} />
        :
        "not found"
      } 
    </div>
  )
}

ActivityDetail.getLayout = function (page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};