// src/components/FormSteps/Name.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";
import { Input } from "../ui/input";
import Butons from "../Butons";

interface ConyugueData {
  spouseFirstName: string;
  spouseSecondName: string;
  spouseLastName: string;
  spouseDOB: string;
  spouseSSN: string;
}

export const Conyugue: React.FC = () => {
  const { register, handleSubmit } = useForm<ConyugueData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data: ConyugueData) => {
    updateFormData(data);
    navigate("/multistep-form/address");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="border-b border-black">Conyugue</h2>
      <div className="max-w-56 m-auto py-10">
        <div>
          <label htmlFor="spouseFirstName">Primer Nombre</label>
          <Input
            className="max-w-56"
            required
            {...register("spouseFirstName")}
            id="spouseFirstName"
          />
        </div>
        <div>
          <label htmlFor="spouseSecondName">Segundo Nombre</label>
          <Input
            className="max-w-56"
            required
            {...register("spouseSecondName")}
            id="spouseSecondName"
          />
        </div>
        <div>
          <label htmlFor="spouseLastname">Apellidos</label>
          <Input
            className="max-w-56"
            required
            {...register("spouseLastName")}
            id="spouse-lastname"
          />
        </div>
        <div>
          <label htmlFor="spouseDOB">DOB</label>
          <Input
            type="date"
            className="max-w-56"
            required
            {...register("spouseDOB")}
            id="spouseDob"
          />
        </div>
        <div>
          <label htmlFor="spouseSSN">
            SSN <span className="tex-sm">(9 dígitos)</span>
          </label>
          <Input
            className="max-w-56"
            required
            {...register("spouseSSN")}
            id="spouseSSN"
          />
        </div>
      </div>
      <Butons />
    </form>
  );
};
