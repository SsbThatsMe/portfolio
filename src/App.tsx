import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Menu from './pages/Menu'
import Beverages from './pages/Beverages'
import About from './pages/About'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Menu", element: <Menu /> },
  { path: "/Beverages", element: <Beverages /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <PageNotFound /> },
])
//
function App() {
  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
