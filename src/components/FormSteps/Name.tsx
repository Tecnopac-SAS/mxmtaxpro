// src/components/FormSteps/Name.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Change this line
import { useFormContext } from "../../context/FormContext";
import { Input } from "../ui/input";
import Butons from "../Butons";

interface NameData {
  firstName: string;
  secondName: string;
  lastName: string;
  DOB: string;
  SSN: string;
}

export const Name: React.FC = () => {
  const { register, handleSubmit } = useForm<NameData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data: NameData) => {
    updateFormData(data);
    navigate("/multistep-form/conyugue");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className=" border-b border-black">Nombre</h2>
      <div className="max-w-56 m-auto py-10">
        <div>
          <label htmlFor="firstName">Primer Nombre</label>
          <Input
            className="max-w-56"
            required
            {...register("firstName")}
            id="firstName"
          />
        </div>
        <div>
          <label htmlFor="secondName">Segundo Nombre</label>
          <Input
            className="max-w-56"
            required
            {...register("secondName")}
            id="secondName"
          />
        </div>
        <div>
          <label htmlFor="lastname">Apellidos</label>
          <Input
            className="max-w-56"
            required
            {...register("lastName")}
            id="lastname"
          />
        </div>
        <div>
          <label htmlFor="dob">DOB</label>
          <Input
            type="date"
            className="max-w-56"
            required
            {...register("DOB")}
            id="dob"
          />
        </div>
        <div>
          <label htmlFor="ssn">
            SSN <span className="tex-sm">(9 dígitos)</span>
          </label>
          <Input
            className="max-w-56"
            required
            {...register("SSN")}
            id="ssn"
          />
        </div>{" "}
      </div>
      <Butons />
    </form>
  );
};
