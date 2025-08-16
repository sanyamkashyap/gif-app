import { createBrowserRouter } from "react-router-dom"
import './App.css'
import AppLayout from './layouts/app-layout'
import Categories from "./layouts/categories"
import SearchPage from "./layouts/search"
import Favorites from "./layouts/favorites"

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/:category',
        element: <Categories />
      },
      {
        path: '/search/:query',
        element: <SearchPage />
      },
      {
        path: '/:type/:slug',
        element: <Home />
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
    ]
  }
])

function App() {

  return (
    <>

    </>
  )
}

export default App
