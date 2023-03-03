import React from 'react'
import DashboardLayout from '../../../src/layouts/dashboard_layout/DashboardLayout'
export default function Activities() {
  return (
    <div>Activities</div>
  )
}
Activities.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}