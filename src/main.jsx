import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import MainPage from './Pages/MainPage.jsx';
import RegisterPage from './Pages/RegisterPage.jsx'
import CreazioneGiornalista from './Pages/CreazioneGiornalista.jsx'
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
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/creazione-utenza",
    element : <CreazioneGiornalista />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
