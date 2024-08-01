import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/FormContext";
import Buttons from "../Buttons";
import { useNavigate } from "react-router-dom";
interface QuestionSevenData {
  question7: string;
}
function Question7() {
  const { register, handleSubmit } = useForm<QuestionSevenData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();
  const onSubmit = (data: QuestionSevenData) => {
    updateFormData(data);
    navigate("/multistep-form/question8");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="border-b border-black">Pregunta 7</h2>
      <div className="max-w-[869px] m-auto pb-28 px-20  my-10 border rounded-md ">
        <div className="py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="question7">
              ¿Le gustaría que su devolución de impuestos se le depositara
              directamente en su cuenta?
            </Label>
            <fieldset
              required
              id="question6"
              {...register("question7")}
              className="flex gap-2"
            >
              <label htmlFor="yes">Si</label>
              <input
                id="yes"
                type="radio"
                value="yes"
                name="question7"
              />
              <label htmlFor="no">No</label>
              <input
                id="no"
                type="radio"
                value="no"
                checked
                name="question7"
              />
            </fieldset>
          </div>
        </div>
      </div>
      <Buttons />
    </form>
  );
}
export default Question7;
