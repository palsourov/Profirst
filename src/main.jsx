// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router"; // ✅ should be from 'react-router-dom'
import { router } from './pages/Route.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='urbanist'>
      <RouterProvider router={router} />
    </div>
  </StrictMode>
)
