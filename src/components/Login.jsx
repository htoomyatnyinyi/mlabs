import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  console.log("hi")
  return (
    <div>
     <div>Login</div>
<Link to="/" className='bg-gray-300 p-1 rounded-md'>Go to home</Link>
    </div>
  )
}

export default Login