import React from "react";
import { DependantTable } from "../DependantTable";
import AddDependent from "../AddDependent";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export const Dependents: React.FC = () => {
  const onSubmit = () => {
    navigate("question1");
  };
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  return (
    <>
      <h2 className=" border-b border-black font-bold">Dependientes</h2>
      <div>
        <DependantTable />
        <AddDependent />
      </div>
      <div className="flex justify-end border-t gap-7 border-gray-500 my-auto pt-5">
        <Button
          type="button"
          onClick={onBack}
        >
          Volver
        </Button>
        <Button
          className="bg-redp hover:bg-redp w-40"
          onClick={onSubmit}
        >
          Siguiente
        </Button>
      </div>
    </>
  );
};
