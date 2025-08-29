import React from 'react'
import {Link, useLocation} from "react-router-dom"



const NavBar = () => {
  const location = useLocation()

  return (
    <div className='nav-bar'>
      <Link className={'nav-bar-link ' + (location.pathname == "/portfolio/" ? "nav-bar-link-selected": "nav-bar-link-unselected")} to="/portfolio/">HOME</Link>
      <Link className={'nav-bar-link ' + (location.pathname == "/portfolio/projects" ? "nav-bar-link-selected": "nav-bar-link-unselected")} to="/portfolio/projects">PROJECTS</Link>
      <Link className={'nav-bar-link ' + (location.pathname == "/portfolio/about" ? "nav-bar-link-selected": "nav-bar-link-unselected")} to="/portfolio/about">ABOUT</Link>
    </div>
  )
}

export default NavBar