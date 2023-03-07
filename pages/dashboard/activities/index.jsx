import React from 'react'
import ActivityCard from '../../../src/components/cards'
import DashboardLayout from '../../../src/layouts/dashboardLayout/DashboardLayout'
export default function Activities() {
  return (<ActivityCard />)
}
Activities.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}