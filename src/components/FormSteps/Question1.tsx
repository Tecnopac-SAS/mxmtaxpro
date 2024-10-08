import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/FormContext";
import Buttons from "../Buttons";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
interface QuestionOneData {
  question1: string;
  documents: string;
}
function Question1() {
  const { register, handleSubmit } = useForm<QuestionOneData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data: QuestionOneData) => {
    updateFormData(data);
    navigate("/multistep-form/question2");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="border-b border-black">Pregunta 1</h2>
      <div className="max-w-[869px] m-auto pb-28 px-20  my-10 border rounded-md ">
        <div className="py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="question1">
              ¿Usted o su conyuge tienen negocio propio?
            </Label>
            <fieldset
              id="question1"
              {...register("question1")}
              className="flex gap-2"
            >
              <label htmlFor="yes">Si</label>
              <input
                id="yes"
                type="radio"
                value="yes"
                name="question1"
              />
              <label htmlFor="no">No</label>
              <input
                id="no"
                type="radio"
                value="no"
                checked
                name="question1"
              />
            </fieldset>
          </div>
          <div className="py-2">
            <Label htmlFor="supportDocument">
              Anexe forma 1099 y relación de ingresos y gastos
            </Label>
            <Input
              type="file"
              multiple
              {...register("documents")}
            />
          </div>
        </div>
        <Buttons />
      </div>
    </form>
  );
}
export default Question1;
