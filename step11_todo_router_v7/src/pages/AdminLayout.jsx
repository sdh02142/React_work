import React from 'react'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
  return (
    <div style={{backgroundColor:'skyblue'}}>
      <h1>AdminLayout</h1>
      <Outlet/>
    </div>
  )
}

export default AdminLayout