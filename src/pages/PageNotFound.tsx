import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
        <title>Samuel Sandberg Bröms - 404</title>
        <NavBar/>
        
        <div>404: page not found</div>
        <Link to="/portfolio/">HOME</Link>
    </>
  )
}

export default PageNotFound