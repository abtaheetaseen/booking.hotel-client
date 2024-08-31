import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import RoomDetails from "../components/rooms/RoomDetails";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/rooms/:id",
                element: <RoomDetails />,
                loader: ({params}) => fetch(`http://localhost:3000/rooms/${params.id}`)
            }
        ]
    },
    { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
])