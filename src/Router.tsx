import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CreateWorkout from "./pages/CreateWorkout";
import Workoutplan from "./components/Workoutplan";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                index: true,
            },
            {
                path: "/create-workout",
                element: <CreateWorkout />,
            },
            {
                path:"/workout",
                element: <Workoutplan />
            }
        ]
    }
]);
