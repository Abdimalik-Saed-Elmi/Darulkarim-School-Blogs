import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

import { Toaster } from 'react-hot-toast';
import { UserProvider } from './hooks/useUser.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
   
      {
        path: "/dashboard",
        element: <DashboardPage />
      },

    ]
  },
  
  {
    path: "/login",
    element: <LoginPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Toaster />
      <RouterProvider router={router} />
    </UserProvider>

  </React.StrictMode>,
);
