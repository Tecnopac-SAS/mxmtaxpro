import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/FormContext";
import Buttons from "../Buttons";
import { useNavigate } from "react-router-dom";
interface QuestionTwoData {
  question2: string;
}
function Question2() {
  const { register, handleSubmit } = useForm<QuestionTwoData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();
  const onSubmit = (data: QuestionTwoData) => {
    updateFormData(data);
    navigate("/multistep-form/question3");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="border-b border-black">Pregunta 2</h2>
      <div className="max-w-[869px] m-auto pb-28 px-20  my-10 border rounded-md ">
        <div className="py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="question2">
              ¿Usted o su conyuge puede ser declarado dependiente de otro
              contribuyente?
            </Label>
            <fieldset
              required
              id="question1"
              {...register("question2")}
              className="flex gap-2"
            >
              <label htmlFor="yes">Si</label>
              <input
                id="yes"
                type="radio"
                value="yes"
                name="question2"
              />
              <label htmlFor="no">No</label>
              <input
                id="no"
                type="radio"
                value="no"
                checked
                name="question2"
              />
            </fieldset>
          </div>
        </div>
      </div>
      <Buttons />
    </form>
  );
}
export default Question2;
