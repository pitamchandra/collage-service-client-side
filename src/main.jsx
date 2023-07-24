import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './LayOut/Main.jsx'
import Home from './Pages/Home/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Login/Register.jsx'
import Error from './Pages/ErrorPage/Error.jsx'
import Colleges from './Pages/Colleges/Colleges'
import Admission from './Pages/Admission/Admission'
import AuthProvider from './AuthProvider/AuthProvider'
import CollageDetails from './components/CollageDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children : [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/college',
        element: <Colleges></Colleges>
      },
      {
        path: '/admission',
        element: <Admission></Admission>
      },
      {
        path: '/collegeDetails/:id',
        element: <CollageDetails></CollageDetails>,
        loader: ({params}) => fetch(`college.json/${params.id}`)
      }

    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
