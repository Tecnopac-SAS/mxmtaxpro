import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface AddressData {
  address: string;
  apt: string;
  state: string;
  city: string;
  zipCode: string;
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
      <h2 className=" border-b border-black">Dirección</h2>
      <div className="max-w-56">
        <label htmlFor="date">Dirección</label>
        <Input
          {...register("address")}
          id="address"
          required
        />
      </div>
      <div className="max-w-56">
        <label htmlFor="date">Apto</label>
        <Input
          {...register("apt")}
          id="apt"
          required
        />
      </div>
      <div className="max-w-56">
        <label htmlFor="year">Estado</label>
        <select
          className="w-full"
          {...register("state")}
          name="state"
          id="state"
          required
        >
          <option
            value=""
            disabled
            hidden
          >
            Selecciona
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="max-w-56">
        <label htmlFor="year">Ciudad</label>
        <select
          className="w-full"
          {...register("city")}
          name="city"
          id="city"
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="max-w-56">
        <label htmlFor="date">Zip code</label>
        <Input
          {...register("zipCode")}
          id="zipCode"
          required
        />
      </div>

      <Button type="submit">Next</Button>
    </form>
  );
};
