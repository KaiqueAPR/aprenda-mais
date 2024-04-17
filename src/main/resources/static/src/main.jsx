import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'

import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <SignUp />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
