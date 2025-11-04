import {Link, useLocation} from "react-router-dom"

const NavBar = () => {
  const location = useLocation()
  return (
    <div className='nav-bar'>
      <Link className={'nav-bar-link ' + (location.pathname == "/" ? "nav-bar-link-selected": "nav-bar-link-unselected")} to="/">HOME</Link>
      <Link className={'nav-bar-link ' + (location.pathname == "/menu" ? "nav-bar-link-selected": "nav-bar-link-unselected")} to="/menu">MENU</Link>
      <Link className={'nav-bar-link ' + (location.pathname == "/beverages" ? "nav-bar-link-selected": "nav-bar-link-unselected")} to="/beverages">BEVERAGES</Link>
      <Link className={'nav-bar-link ' + (location.pathname == "/about" ? "nav-bar-link-selected": "nav-bar-link-unselected")} to="/about">ABOUT</Link>
    </div>
  )
}

export default NavBar