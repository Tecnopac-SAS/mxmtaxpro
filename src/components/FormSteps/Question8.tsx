import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/FormContext";
import Buttons from "../Buttons";
import { useNavigate } from "react-router-dom";

interface QuestionEightData {
  question8: string;
}

function Question8() {
  const { handleSubmit, setValue } = useForm<QuestionEightData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();
  const [question8Value, setQuestion8Value] = useState<string>("");

  const onSubmit = (data: QuestionEightData) => {
    updateFormData(data);
    navigate("/multistep-form/sign-type");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="border-b border-black">Estado civil</h2>
      <div className="max-w-[869px] m-auto px-20 my-10 border rounded-md">
        <div className="py-4">
          <RadioGroup
            id="question8"
            value={question8Value}
            onValueChange={(value) => {
              setQuestion8Value(value);
              setValue("question8", value);
            }}
            className="flex-col justify-center gap-6"
            required
          >
            <div className="space-x-2">
              <RadioGroupItem
                value="Soltero(a)"
                id="1"
              />
              <Label htmlFor="1">Soltero(a)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="Casado Declarando Juntos"
                id="2"
              />
              <Label htmlFor="2">Casado Declarando Juntos</Label>
            </div>
            <div className="space-x-2">
              <RadioGroupItem
                value="Casado Declarando Separado"
                id="3"
              />
              <Label htmlFor="3">Casado Declarando Separado</Label>
            </div>
            <div className="space-x-2">
              <RadioGroupItem
                value="Cabeza de Familia"
                id="4"
              />
              <Label htmlFor="4">Cabeza de Familia</Label>
            </div>
            <div className="space-x-2">
              <RadioGroupItem
                value="Viudo(a) calificado con hijo dependiente"
                id="5"
              />
              <Label htmlFor="5">
                Viudo(a) calificado con hijo dependiente
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <Buttons />
    </form>
  );
}

export default Question8;
