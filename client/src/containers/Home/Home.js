import React from 'react'
import axios from '../../shared/axios-api'

const Home = (props) => {

   const logoutHandler = () => {
      axios.get('/auth/logout').then((res) => {
         props.history.push('/login')
      })
   }

   const getUserHandler = () => {
      axios.get('/auth/user').then(res => {
         console.log(res.data)
      }).catch((e) => {
         console.log(e)
      })
   }

   return (
      <h1>
         was good ma nigga
         <button><a href="http://localhost:5000/api/v1/auth/google">get google</a></button>
         <button onClick={logoutHandler}>logout</button>
         <button onClick={getUserHandler}>get user</button>
      </h1>
   )
}
export default Home
