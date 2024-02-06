import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <div className='bg-gray-400 h-screen p-2'>
        <div>
          <TopBar />
          <h3 className='bg-gray-200 p-1 m-1 text-pretty text-3xl rounded-md text-center flex-wrap'>Hi form HOme</h3>
        </div>
        <div>
          <Link to="upload" className='bg-gray-100 p-1 rounded-md m-1'>Here to upload</Link>
          <Link to="login" className='bg-gray-100 p-1 rounded-md m-1'>Here to login</Link>
        </div>

        {/* <button onClick={fetchAPI_Mlab()}>Fetch Function</button> */}
      </div>
    </div>
  )
}

export default Home


const TopBar = () => {
  return (
    <div>
      <ul className='flex'>
        <li>Home</li>
        <li>FDB Owner</li>
        <li>About Us</li>
      </ul>
    </div>
  )
}