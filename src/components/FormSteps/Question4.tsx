import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/FormContext";
import Buttons from "../Buttons";
import { useNavigate } from "react-router-dom";
interface QuestionFourData {
  question4: string;
}
function Question4() {
  const { register, handleSubmit } = useForm<QuestionFourData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();
  const onSubmit = (data: QuestionFourData) => {
    updateFormData(data);
    navigate("/multistep-form/question5");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="border-b border-black">Pregunta 4</h2>
      <div className="max-w-[869px] m-auto pb-28 px-20  my-10 border rounded-md ">
        <div className="py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="question4">
              ¿Usted o su conyuge posee cuenta(s) en una institución financiera
              en el exterior?
            </Label>{" "}
            <fieldset
              required
              id="question4"
              {...register("question4")}
              className="flex gap-2"
            >
              <label htmlFor="yes">Si</label>
              <input
                id="yes"
                type="radio"
                value="yes"
                name="question4"
              />
              <label htmlFor="no">No</label>
              <input
                id="no"
                type="radio"
                value="no"
                checked
                name="question4"
              />
            </fieldset>
          </div>
        </div>
      </div>
      <Buttons />
    </form>
  );
}
export default Question4;
