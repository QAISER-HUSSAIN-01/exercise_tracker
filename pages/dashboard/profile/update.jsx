import React from 'react'
import UpdateForm from '../../../src/components/updateForm'
import DashboardLayout from '../../../src/layouts/dashboardLayout/DashboardLayout'

export default function Update() {
  return (<UpdateForm />)
}

Update.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}