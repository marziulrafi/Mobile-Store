import { createBrowserRouter, RouterProvider } from 'react-router'
import App from '../App'
import About from '../pages/About'
import Favourites from '../pages/Favourites'
import Home from '../pages/Home'
import MobileDetails from '../pages/MobileDetails'
import MainLayout from '../layouts/MainLayout'
import ErrorPage from '../pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ()=>fetch('mobiles.json')
      },
      {
        path: '/favourites',
        Component: Favourites
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/mobile-details',
        element: <MobileDetails />
      }
    ]
  }
])

export default router