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
import YearlyDataTable from "./components/YearData/YearData.tsx";
import MultistepForm from "./components/MultistepForm.tsx";
import { YearInfo } from "./components/FormSteps/YearInfo.tsx";
import { Name } from "./components/FormSteps/Name.tsx";
import { Review } from "./components/FormSteps/Review.tsx";
import { Conyugue } from "./components/FormSteps/Conyugue.tsx";
import { Address } from "./components/FormSteps/Address.tsx";
import { Contact } from "./components/FormSteps/Contact.tsx";

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
        element: <YearlyDataTable />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
    ],
  },
  // New multistep form routes
  {
    path: "multistep-form",
    element: <MultistepForm />,
    children: [
      { path: "", element: <YearInfo /> },
      { path: "name", element: <Name /> },
      { path: "conyugue", element: <Conyugue /> },
      { path: "address", element: <Address /> },
      { path: "contact", element: <Contact /> },
      { path: "review", element: <Review /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
