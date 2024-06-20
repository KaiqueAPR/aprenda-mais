import './index.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import React from 'react'
import ReactDOM from 'react-dom/client'
import EmailAuth from './pages/EmailAuth/EmailAuth'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
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
  { /* Existe duas formas de passar parametros pela URL 
    * 1 - Através de query params - Exemplo: /validaconta?codigo=123 - /rota?parametro 
    *        OBS: Não é necessário declarar o parametro na rota
    * 
    * 2 - Através de path params - Exemplo: /validaconta/123 - /rota/:parametro
    * */ 
   
    path: "/validaconta",
    element: <ValidateAccont />,
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
