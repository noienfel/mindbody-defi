import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './routes/Home.jsx'
import Entrevista from './routes/Entrevista.jsx'
import Admin from './routes/Admin.jsx'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/entrevista",
    element: <Entrevista />,
  },
  {
    path: "/admin",
    element: <Admin />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
