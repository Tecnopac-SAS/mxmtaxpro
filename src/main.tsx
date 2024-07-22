import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import Register from "./pages/Register.tsx";
import Code from "./components/CodeForm.tsx";
import FiscalYear from "./pages/FiscalYear.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import Account from "./pages/Account.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "code",
        element: <Code />,
      },
      {
        path: "fiscal-year",
        element: <FiscalYear />,
      },
    ],
  },

  {
    element: <DashboardLayout />,
    path: "/dashboard",
    children: [
      {
        path: "2019",
        element: "2019",
      },
      {
        path: "2020",
        element: "2020",
      },
      {
        path: "2021",
        element: "2021",
      },
      {
        path: "2022",
        element: "2022",
      },
      {
        path: "2023",
        element: "2023",
      },
      {
        path: "2024",
        element: "2024",
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
