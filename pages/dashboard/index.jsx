import React from 'react'
import DashboardLayout from '../../src/layouts/dashboard_layout/DashboardLayout'

export default function Dashboard() {
  return (
    <div>Dashboard width sidebar and navbar</div>
  )
}

Dashboard.getLayout = function(page){
    return <DashboardLayout>{page}</DashboardLayout>
}
