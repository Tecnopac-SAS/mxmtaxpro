import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";
import { Input } from "../ui/input";
import Buttons from "../Buttons";

interface AddressData {
  phone1: string | number | undefined;
  phone2: string | number | undefined;
  email: string;
}

export const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm<AddressData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data: AddressData) => {
    updateFormData(data);
    navigate("/multistep-form/dependents");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className=" border-b border-black">Contacto</h2>
      <div className="max-w-56 m-auto pt-10">
        <label htmlFor="phone1">Numero Telefono 1</label>
        <Input
          {...register("phone1")}
          id="phone1"
          type="number"
          required
        />
      </div>
      <div className="max-w-56  m-auto">
        <label htmlFor="phone2">Numero Telefono 1</label>
        <Input
          type="number"
          {...register("phone2")}
          id="phone2"
        />
      </div>
      <div className="max-w-56 m-auto pb-40">
        <label htmlFor="date">Correo electronico</label>
        <Input
          type="email"
          {...register("email")}
          id="email"
          required
        />
      </div>
      <Buttons />
    </form>
  );
};
