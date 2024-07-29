import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "../../context/FormContext";

interface PersonalInfoData {
  name: string;
  email: string;
}

export const PersonalInfo: React.FC = () => {
  const { register, handleSubmit } = useForm<PersonalInfoData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate(); // Change this line

  const onSubmit = (data: PersonalInfoData) => {
    updateFormData(data);
    navigate("/multistep-form/employment"); // Change this line
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          {...register("name")}
          id="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          id="email"
          type="email"
          required
        />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};
