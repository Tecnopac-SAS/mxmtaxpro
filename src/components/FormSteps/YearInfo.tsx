import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface YearInfoData {
  date: string;
  year: string;
}

export const YearInfo: React.FC = () => {
  const { register, handleSubmit } = useForm<YearInfoData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data: YearInfoData) => {
    updateFormData(data);
    navigate("/multistep-form/name");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className=" border-b border-black">Fecha y año</h2>
      <div className="max-w-56">
        <label htmlFor="date">Fecha</label>
        <Input
          type="date"
          {...register("date")}
          id="date"
          required
        />
      </div>
      <div className="max-w-56">
        <label htmlFor="year">Año fiscal a declarar</label>
        <select
          className="w-full"
          {...register("year")}
          name="fiscal-year"
          id="year"
          required
        >
          <option
            value=""
            disabled
            hidden
          >
            Selecciona
          </option>
          <option value="2021">Año-2021</option>
          <option value="2022">Año-2022</option>
          <option value="2023">Año-2023</option>
          <option value="2024">Año-2024</option>
        </select>
      </div>

      <Button type="submit">Next</Button>
    </form>
  );
};
