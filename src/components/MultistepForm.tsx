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
      case "/multistep-form/addres":
        return 30;
      case "/multistep-form/contact":
        return 40;
      case "/multistep-form/dependents":
        return 60;
      case "/multistep-form/question1":
        return 10;
      case "/multistep-form/review":
        return 100;
      default:
        return 0;
    }
  };

  return (
    <>
      <FormHeader />
      <div className="flex pt-2">
        <a
          href="/client"
          className="flex items-center gap-2 md:pl-20 text-lg font-semibold max-w-[10%]"
        >
          <img
            src="/icons/back.svg"
            alt="back"
            height={10}
            width={10}
          />{" "}
          Cancelar
        </a>
        <Progress
          value={getProgressValue()}
          className="max-w-[20%]  m-auto "
        />
      </div>
      <FormProvider>
        <div className="max-w-[90%] m-auto pt-10">
          <Outlet />
        </div>
      </FormProvider>
    </>
  );
};

export default MultistepForm;
