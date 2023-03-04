import React from 'react'
import DashboardLayout from '../../../src/layouts/dashboard_layout/DashboardLayout'

export default function Setting() {
  return (
    <div>Setting</div>
  )
}

Setting.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}
