import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Dashboard = () => {
  const { username, loggedIn } = useSelector((state) => state.auth)

  return (
    <div>
      <div>
        {loggedIn ?

          <h1>Welcom to Profile Dashboard <h3> {username}</h3></h1>
          :
          <div>No Profile Yet..
            <Register />
            <Link to='/register'>Need to Register</Link>
          </div>
        }



      </div>
      <Link to='/'>Go Home</Link>
    </div>
  )
}

export default Dashboard

const Register = () => {
  return (
    <div>
      <h1>Register Form isHere</h1>
    </div>
  )
}