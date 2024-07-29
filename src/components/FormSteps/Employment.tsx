// src/components/FormSteps/Employment.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Change this line
import { useFormContext } from "../../context/FormContext";

interface EmploymentData {
  company: string;
  position: string;
}

export const Employment: React.FC = () => {
  const { register, handleSubmit } = useForm<EmploymentData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate(); // Change this line

  const onSubmit = (data: EmploymentData) => {
    updateFormData(data);
    navigate("/multistep-form/review"); // Change this line
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="company">Company</label>
        <input
          {...register("company")}
          id="company"
        />
      </div>
      <div>
        <label htmlFor="position">Position</label>
        <input
          {...register("position")}
          id="position"
        />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};
