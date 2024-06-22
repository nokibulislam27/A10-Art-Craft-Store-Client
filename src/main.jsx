import React from 'react'
import ReactDOM from 'react-dom/client'

import {

  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Route/Router';
import AuthProvider from './Provider/AuthProvider/AuthProvider';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>
)
