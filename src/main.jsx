import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import MainPage from './Pages/MainPage.jsx';
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,  
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <MainPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
