import {
  createBrowserRouter,
} from "react-router-dom";
import Cards from "../../pages/Cards";
import CardSlug from "../../pages/Card";
import Test from "../../pages/Test";
import Error from "../../pages/Error";
import Index from "../../pages";

const router = createBrowserRouter([
  {
    path: "/cards",
    element: <Cards/>,
    
  },
  {
    path: "cards/:Id",
    element: <CardSlug />,
    
  },
  {
    path: "/test",
    element: <Test/>,
  },
  {
    path: "/",
    element:<Index/>,
    errorElement:<Error/>
  }
]);

export default router