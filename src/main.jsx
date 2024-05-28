import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from '../routes.jsx'
import { CartProvider } from './Components/Contexts/CartContext.jsx'


const router = createBrowserRouter(routes)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider  router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
