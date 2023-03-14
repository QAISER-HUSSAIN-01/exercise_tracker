import React from 'react'
import SettingComponent from '../../../src/components/setting'
import DashboardLayout from '../../../src/layouts/dashboardLayout/DashboardLayout'

export default function Setting() {
  return (
    <SettingComponent />
  )
}

Setting.getLayout = function(page){
  return <DashboardLayout>{page}</DashboardLayout>
}
