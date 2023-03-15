import React from 'react'
import DashboardComponent from '../../src/components/dashboard'
import DashboardLayout from '../../src/layouts/dashboardLayout/DashboardLayout'

export default function Dashboard() {
  return <DashboardComponent />
}

Dashboard.getLayout = function(page){
    return <DashboardLayout>{page}</DashboardLayout>
}
