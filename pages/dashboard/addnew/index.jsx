import React from 'react'
import DashboardLayout from '../../../src/layouts/dashboard_layout/DashboardLayout'
export default function AddActivity() {
  return (
    <div>AddActivity</div>
  )
}


AddActivity.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}