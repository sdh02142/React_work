import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const param = useParams();

  return (
    <div>
      <h1>User Page</h1>
      <h1>{param.id}, welcome</h1>
    </div>
  )
}

export default User