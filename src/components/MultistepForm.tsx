import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { FormProvider } from "../context/FormContext";
import { Progress } from "./ui/progress";
import FormHeader from "./FormHeader";

const MultistepForm: React.FC = () => {
  const location = useLocation();

  const getProgressValue = () => {
    switch (location.pathname) {
      case "/multistep-form":
        return 0;
      case "/multistep-form/name":
        return 10;
      case "/multistep-form/conyugue":
        return 20;
      case "/multistep-form/review":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <>
      <FormHeader />
      <FormProvider>
        <div className="max-w-96 m-auto pt-10">
          <Progress value={getProgressValue()} />
          <Outlet />
        </div>
      </FormProvider>
    </>
  );
};

export default MultistepForm;
