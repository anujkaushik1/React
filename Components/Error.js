import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
  return (
    <div>
        <h1>Something Went Wrong!!</h1>
        <h2>{err.status} : {err.statusText}</h2>

    </div>
  )
}

export default Error