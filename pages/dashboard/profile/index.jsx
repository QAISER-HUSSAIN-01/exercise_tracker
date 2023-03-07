import React from 'react'
import UserProfile from '../../../src/components/userProfile'
import DashboardLayout from '../../../src/layouts/dashboardLayout/DashboardLayout'

export default function Profile() {
  return (<UserProfile />)
}


Profile.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}
