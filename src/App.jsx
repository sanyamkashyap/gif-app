import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import AppLayout from './layouts/app-layout'
import Categories from "./page/categories"
import SearchPage from "./page/search"
import Favorites from "./page/favorites"
import Home from "./page/home"
import GifProvider from "./contex/gif-contex"

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
      <GifProvider>
        <RouterProvider router={router}></RouterProvider>
      </GifProvider>
    </>
  )
}

export default App
