import {
  createBrowserRouter,
} from "react-router";
import Roots from "./Roots";
import Error from "./error";
import Home from "./Home";

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
]
  },
]);