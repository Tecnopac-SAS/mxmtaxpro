import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/FormContext";
import Buttons from "../Buttons";
import { useNavigate } from "react-router-dom";
interface QuestionFiveData {
  question5: string;
}
function Question5() {
  const { register, handleSubmit } = useForm<QuestionFiveData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();
  const onSubmit = (data: QuestionFiveData) => {
    updateFormData(data);
    navigate("/multistep-form/question6");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="border-b border-black">Pregunta 5</h2>
      <div className="max-w-[869px] m-auto pb-28 px-20  my-10 border rounded-md">
        <div className="py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="question5">
              ¿Obtuvo su plan de seguro de salud a través del marketplace?
            </Label>
            <fieldset
              required
              id="question5"
              {...register("question5")}
              className="flex gap-2"
            >
              <label htmlFor="yes">Si</label>
              <input
                id="yes"
                type="radio"
                value="yes"
                name="question5"
              />
              <label htmlFor="no">No</label>
              <input
                id="no"
                type="radio"
                value="no"
                checked
                name="question5"
              />
            </fieldset>
          </div>
        </div>
      </div>
      <Buttons />
    </form>
  );
}
export default Question5;
