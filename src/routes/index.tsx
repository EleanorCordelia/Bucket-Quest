import rLAuth from "./AuthRoutes";
import rLNav from "./WithNavRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const routeList = createBrowserRouter([...rLAuth, ...rLNav]);
const Routes = () => {
    return <RouterProvider router={routeList} />;
  };
  
  export default Routes;