import React from 'react'
import DashboardLayout from '../../../src/layouts/dashboardLayout/DashboardLayout'

export default function Calendar() {
  return (
    <div>Calendar</div>
  )
}


Calendar.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}