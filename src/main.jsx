import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage, Restaurants, RestaurantDetail } from './pages/Pages'
import { Custom404 } from './components/Components'
import { IsAuth } from './middleware/IsAuth'
import { LoadingProvider } from './context/LoadingContext'
import '@smastrom/react-rating/style.css'
import './index.css'


const router = createBrowserRouter([
  { path: '/', element: <LoginPage /> },
  {
    path: '/restaurants',
    element: <IsAuth />,
    children: [
      {
        index: true,
        element: <Restaurants />
      },
      {
        path: 'detail/:location_id',
        element: <RestaurantDetail />
      }
    ]
  },
  { path: '*', element: <Custom404 />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoadingProvider>
    <RouterProvider router={router} />
  </LoadingProvider>
)
