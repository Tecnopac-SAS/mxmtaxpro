// src/components/MultistepForm.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { FormProvider } from "../context/FormContext";

const MultistepForm: React.FC = () => {
  return (
    <FormProvider>
      <Outlet />
    </FormProvider>
  );
};

export default MultistepForm;
