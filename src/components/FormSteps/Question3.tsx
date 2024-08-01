import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/FormContext";
import Buttons from "../Buttons";
import { useNavigate } from "react-router-dom";
interface QuestionThreeData {
  question3: string;
}
function Question3() {
  const { register, handleSubmit } = useForm<QuestionThreeData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();
  const onSubmit = (data: QuestionThreeData) => {
    updateFormData(data);
    navigate("/multistep-form/question4");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="border-b border-black">Pregunta 3</h2>
      <div className="max-w-[869px] m-auto pb-28 px-20  my-10 border rounded-md ">
        <div className="py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="question3">
              <Label htmlFor="question3">
                2 ¿Usted o su conyuge son socios en una sociedad o compañía?
              </Label>
            </Label>
            <fieldset
              required
              id="question3"
              {...register("question3")}
              className="flex gap-2"
            >
              <label htmlFor="yes">Si</label>
              <input
                id="yes"
                type="radio"
                value="yes"
                name="question3"
              />
              <label htmlFor="no">No</label>
              <input
                id="no"
                type="radio"
                value="no"
                checked
                name="question3"
              />
            </fieldset>
          </div>
        </div>
      </div>
      <Buttons />
    </form>
  );
}
export default Question3;
