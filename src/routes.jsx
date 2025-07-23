import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";
import About from "./components/About.jsx";
import Checkout from "./components/Checkout.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "about", element: <About /> },
      { path: "checkout", element: <Checkout /> },
    ],
  },
];

export default routes;
