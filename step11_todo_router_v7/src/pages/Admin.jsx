import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Admin() {
  const /*[params, setParams]*/[params] = useSearchParams();

  return (
    <>
      <h1>Admin</h1>
      <h2>{params.get('name')} / {params.get('age')}</h2>
    </>
  )
}

export default Admin