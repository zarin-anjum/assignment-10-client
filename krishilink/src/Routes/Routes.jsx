import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes"
import CropDetails from "../Pages/CropDetails/CropDetails";
import AllCrops from "../Pages/AllCrops/AllCrops";
import AddCrop from "../Pages/AddCrop/AddCrop";
import MyPosts from "../Pages/MyPosts/MyPosts";
import Profile from "../Pages/Profile/Profile"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allcrops",
        element: <AllCrops />,
      },
      {
        path: "/crop/:cropId",
        element: (
          <PrivateRoutes>
            <CropDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-crop",
        element: (
          <PrivateRoutes>
            <AddCrop />
          </PrivateRoutes>
        )
      },
      {
        path: "/my-posts",
        element: (
          <PrivateRoutes>
            <MyPosts />
          </PrivateRoutes>
        )
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        )
      }
    ],
  },
]);

export default router;
