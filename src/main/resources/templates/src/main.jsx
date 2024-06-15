import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import EmailAuth from './pages/EmailAuth/EmailAuth'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import React from 'react'
import ReactDOM from 'react-dom/client'
import SignUp from './pages/SignUp/SignUp'
import ValidateAccont from './pages/ValidAccount/ValidAccount'

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
  {
    path: "/validaconta/:codigo",
    element: <ValidateAccont />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
