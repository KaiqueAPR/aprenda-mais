import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import EmailAuth from './pages/EmailAuth/EmailAuth'
import Home from './pages/Home/Home'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
   {
    path: "/",
    element: <Login />,
   },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <SignUp />,
  },
  {
    path: `/usuario/autenticacao`,//verificar como trabalhar a questão dos IDs
    element: <EmailAuth />,
  },
  {
    path: "/home",
    element: <Home />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
