import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import RegisterPage from "./pages/Register.tsx";
import CodePage from "./components/CodeForm.tsx";
import FiscalYearPage from "./pages/FiscalYear.tsx";
import AccountPage from "./pages/Account.tsx";
import ClientLayout from "./layouts/ClientLayout.tsx";

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
        element: <RegisterPage />,
      },
      {
        path: "code",
        element: <CodePage />,
      },
      {
        path: "fiscal-year",
        element: <FiscalYearPage />,
      },
    ],
  },
  //client
  {
    path: "/client",
    element: <ClientLayout />,
    children: [
      {
        path: "2019",
        element: "year",
      },
      {
        path: "account",
        element: <AccountPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
