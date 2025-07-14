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
import AuthProvaider from './Component/Context/AuthProvaider.jsx';
AOS.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='urbanist'>
      <AuthProvaider>
        <RouterProvider router={router} />
      </AuthProvaider>
      
    </div>
  </StrictMode>
)
