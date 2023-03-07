import React from 'react'
import DashboardLayout from '../../../src/layouts/dashboardLayout/DashboardLayout'

export default function Setting() {
  return (
    <div>Setting</div>
  )
}

Setting.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}
