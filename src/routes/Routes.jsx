import { createBrowserRouter } from "react-router-dom"; 
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login"; 
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
 

const routes = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login', 
                element: <Login></Login>,
            },
            {
                path: '/register', 
                element: <Register></Register>,
            },
            {
                path: "*",
                element: <NotFound></NotFound>,
            },
            
        ]
    }
])

export default routes;
