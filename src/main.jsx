import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Root from "./components/Root/Root.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import ProductDetail from "./components/ProductDetail/ProductDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/productsData.json"),
      },
      {
        path: "/statistics",
        loader: () => fetch("/productsData.json"),
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        loader: () => fetch("/productsData.json"),
        element: <Dashboard />,
      },
      {
        path: "/product/:product_id",
        loader: () => fetch("/productsData.json"),
        element: <ProductDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
