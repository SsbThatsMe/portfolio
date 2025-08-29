import React from 'react'
import NavBar from '../components/NavBar'


const Home = () => {
  return (
    <>
        <NavBar/>
        <div><h1>Samuel Sandberg Bröms</h1></div>
        <img className="profile-picture" src="..\portfolio\src\assets\SamuelSandbergBroms.jpg" alt="asdf" />
    </>
  )
}

export default Home