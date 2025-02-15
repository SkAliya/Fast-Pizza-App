import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as orderCreateAction,
} from "./features/order/CreateOrder";
import Applayout from "./ui/Applayout";
import Error from "./ui/Error";

function App() {
  const router = createBrowserRouter(
    [
      {
        element: <Applayout />,
        errorElement: <Error />,
        children: [
          { path: "/", element: <Home /> },
          {
            path: "/menu",
            element: <Menu />,
            loader: menuLoader,
            errorElement: <Error />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/order/:orderId",
            element: <Order />,
            loader: orderLoader,
            errorElement: <Error />,
          },
          {
            path: "/order/new",
            element: <CreateOrder />,
            action: orderCreateAction,
          },
        ],
      },
    ]
    // {
    //   future: {
    //     v7_relativeSplatPath: true,
    //   },
    // }
  );

  return (
    <RouterProvider router={router} />
    // future={{
    //   v7_startTransition: true,
    // }}
  );
}

export default App;
