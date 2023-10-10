import { createBrowserRouter } from "react-router-dom"; 
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login"; 
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import AboutUs from "../pages/Shared/AboutUs"; 
import PrivateRoute from "../pages/PrivateRoute";
import ServiceDetails from "../pages/Shared/ServiceDetails";
import Gallery from "../pages/Gallery";
import Profile from "../pages/Profile";

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
            {
                path: '/about-us', 
                element: <AboutUs></AboutUs>, 
            },
            {
                path: '/service_details/:id', 
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch("/Services.json") 
            },
            {
                path: '/gallery', 
                element: <Gallery></Gallery>,
            },
            {
                path: '/profile', 
                element: <Profile></Profile>,
            },
            
            
            
        ]
    }
])

export default routes;
