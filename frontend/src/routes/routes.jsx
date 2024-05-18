import Adminroot from "../pages/admin/Adminroot";
import SiteRoot from "../pages/site/SiteRoot";
import Shop from "../pages/site/Shop/Shop";
import Detail from "../pages/site/Detail/Detail";
import Add from "../pages/admin/Add/Add";
import Error from "../pages/site/Error/Error";
import Home from "../pages/site/Home/Home";
import Dashboard from "../pages/admin/Dashboard/Dashboard";
import Products from "../pages/admin/Products/Products";
import Wishlist from "../pages/site/Wishlist/Wishlist";
import About from "../pages/site/About/About";
import Contact from "../pages/site/Contact/Contact"
const ROUTER = [
  {
    path: "/",
    element: <SiteRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "*",
        element: <Error />,
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      },{
        path:"/about",
        element:<About/>
      },{
        path:"/contact",
        element:<Contact/>
      }
    ],
  },

  {
    path: "/admin",
    element: <Adminroot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
      {
        path: "/admin/add",
        element: <Add />,
      },
    ],
  },
];

export default ROUTER;
