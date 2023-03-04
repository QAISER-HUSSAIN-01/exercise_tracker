import React from 'react'
import ActivityForm from '../../../src/components/activityForm'
import DashboardLayout from '../../../src/layouts/dashboard_layout/DashboardLayout'
export default function AddActivity() {
  return (<ActivityForm />)
}


AddActivity.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}