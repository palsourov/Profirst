import {
  createBrowserRouter,
} from "react-router";
import Roots from "./Roots";
import Error from "./error";
import Home from "./Home";
import AboutUs from "../Component/AboutUs";
import Coverage from "../Component/Coverage";
import Pricing from "../Component/Pricing";
import BeARider from "../Component/BeARider";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import FormLayout from "./FormLayout";


 export const router = createBrowserRouter([
  {
    path: "/",
    Component: Roots,
    errorElement:<Error />,
    children: [ 
        {
            index: true,
            path: "/",
            Component:Home,
       
        },
        {
            index: true,
            path: "/AboutUs",
            Component:AboutUs,

        },
        {
            index: true,
            path: "/Coverage",
            Component:Coverage,
       
        },
        {
            index: true,
            path: "/Pricing",
            Component:Pricing,
       
        },
        {
            index: true,
            path: "/BeARider",
            Component:BeARider,
       
        },
        
        
]
  },
  {
    path:'/',
    Component:FormLayout,
    errorElement:<Error />,
    children:[
        {
           
            path: "/SignIn",
            Component:SignIn,
       },
        {
            path: "/SignUp",
            Component:SignUp,
       
        },
]
  }
]);