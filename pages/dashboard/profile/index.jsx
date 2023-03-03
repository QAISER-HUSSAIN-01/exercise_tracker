import React from 'react'
import DashboardLayout from '../../../src/layouts/dashboard_layout/DashboardLayout'
export default function Profile() {
  return (
    <div>Profile</div>
  )
}


Profile.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}