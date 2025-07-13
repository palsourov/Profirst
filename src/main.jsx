// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router"; // ✅ should be from 'react-router-dom'
import { router } from './pages/Route.jsx'
import 'aos/dist/aos.css' // ✅ Only CSS here

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='urbanist'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
)
