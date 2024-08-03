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
import { Dependents } from "./components/FormSteps/Dependents.tsx";
import Question1 from "./components/FormSteps/Question1.tsx";
import Question2 from "./components/FormSteps/Question2.tsx";
import Question3 from "./components/FormSteps/Question3.tsx";
import Question4 from "./components/FormSteps/Question4.tsx";
import Question5 from "./components/FormSteps/Question5.tsx";
import Question6 from "./components/FormSteps/Question6.tsx";
import Question7 from "./components/FormSteps/Question7.tsx";
import Question8 from "./components/FormSteps/Question8.tsx";
import SignType from "./components/FormSteps/SignType.tsx";
import UploadSign from "./components/FormSteps/UploadSign.tsx";
import Sign from "./components/FormSteps/Sign.tsx";

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
      { path: "dependents", element: <Dependents /> },
      { path: "question1", element: <Question1 /> },
      { path: "question2", element: <Question2 /> },
      { path: "question3", element: <Question3 /> },
      { path: "question4", element: <Question4 /> },
      { path: "question5", element: <Question5 /> },
      { path: "question6", element: <Question6 /> },
      { path: "question7", element: <Question7 /> },
      { path: "question8", element: <Question8 /> },
      { path: "sign-type", element: <SignType /> },
      { path: "upload-sign", element: <UploadSign /> },
      { path: "sign", element: <Sign /> },
      { path: "review", element: <Review /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
