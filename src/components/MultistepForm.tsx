// src/components/MultistepForm.tsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { FormProvider } from "../context/FormContext";
import { Progress } from "./ui/progress";

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
      default:
        return 0;
    }
  };

  return (
    <FormProvider>
      <Progress value={getProgressValue()} />
      <Outlet />
    </FormProvider>
  );
};

export default MultistepForm;
