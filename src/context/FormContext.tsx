// src/FormContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

interface FormData {
  [key: string]: any;
}

interface FormContextType {
  formData: FormData;
  updateFormData: (updatedData: Partial<FormData>) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({});

  const updateFormData = (updatedData: Partial<FormData>) => {
    setFormData((prevData) => ({ ...prevData, ...updatedData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
