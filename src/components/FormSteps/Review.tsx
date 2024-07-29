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
    // After submission, you might want to navigate to a success page
    // navigate("/submission-success");
  };
  return (
    <div>
      <h2>Review</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <Button onClick={onBack}>Back</Button>
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};
