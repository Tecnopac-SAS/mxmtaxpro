// src/steps/Review.js
import { useFormContext } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
export const Review = () => {
  const { formData } = useFormContext();
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };

  const onSubmit = () => {
    // Here you would typically submit the form data to your backend
    console.log("Form submitted:", formData);
    alert("submited");
    navigate("/client");
    // After submission, you might want to navigate to a success page
    // navigate("/submission-success");
  };
  return (
    <div>
      <h2>Review</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <div className="flex justify-end border-t gap-7 border-gray-500 my-auto pt-5">
        <Button
          type="button"
          onClick={onBack}
        >
          Volver
        </Button>
        <Button
          className="bg-redp hover:bg-redp w-40"
          type="submit"
          onClick={onSubmit}
        >
          Guardar
        </Button>
      </div>
    </div>
  );
};
