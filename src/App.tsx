import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Projects from './pages/Projects'
import About from './pages/About'

const router = createBrowserRouter([
  { path: "/portfolio/", element: <Home /> },
  { path: "/portfolio/projects", element: <Projects /> },
  { path: "/portfolio/about", element: <About /> },
  { path: "*", element: <PageNotFound /> },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
