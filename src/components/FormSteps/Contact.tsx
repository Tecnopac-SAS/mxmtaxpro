import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface AddressData {
  phone1: string;
  phone2: string;
  email: string;
}

export const Address: React.FC = () => {
  const { register, handleSubmit } = useForm<AddressData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data: AddressData) => {
    updateFormData(data);
    navigate("/multistep-form/review");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className=" border-b border-black">Contacto</h2>
      <div className="max-w-56">
        <label htmlFor="phone1">Dirección</label>
        <Input
          {...register("phone1")}
          id="phone1"
          required
        />
      </div>
      <div className="max-w-56">
        <label htmlFor="phone2">Apto</label>
        <Input
          {...register("phone2")}
          id="phone2"
          required
        />
      </div>
      <div className="max-w-56">
        <label htmlFor="date">Zip code</label>
        <Input
          type="email"
          {...register("email")}
          id="email"
          required
        />
      </div>

      <Button type="submit">Next</Button>
    </form>
  );
};
