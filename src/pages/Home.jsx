import React from 'react'
import { useFirebase } from '../context/firebase'

const Home = () => {
    const {user, userSignout} = useFirebase()
  return (
    <div>
      <h1>Hello {user.email}</h1>
      <button onClick={() => userSignout()}>Logout</button>
    </div>
  )
}

export default Home
