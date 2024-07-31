import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/FormContext";
import Buttons from "../Buttons";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
interface QuestionOneData {
  question1: string;
  document: string;
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
          <Label htmlFor="childCare">
            ¿Usted o su conyuge tienen negocio propio?
          </Label>
          <RadioGroup
            defaultValue="option-one"
            id="childCare"
            {...register("question1")}
            className="flex gap-6"
            required
          >
            <div className=" space-x-2">
              <RadioGroupItem
                value="yes"
                id="option-one"
              />
              <Label htmlFor="option-one">Si</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="no"
                id="option-two"
              />
              <Label htmlFor="option-two">No</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="py-2">
          <Label htmlFor="supportDocument">
            Anexe forma 1099 y relación de ingresos y gastos
          </Label>
          <Input
            type="file"
            multiple
            {...register("document")}
          />
        </div>
      </div>
      <Buttons />
    </form>
  );
}
export default Question1;
