import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global.css";
import Home from "../src/pages/Home/Home.jsx";
import Login from "../src/pages/Login/login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const routes = createBrowserRouter([
  {   
      path: '/',
      element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routes}/>
  </React.StrictMode>,
)
