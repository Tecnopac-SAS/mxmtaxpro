import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useFormContext } from "../context/FormContext";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
interface DependentData {
  dependentFullName: string;
  dependentBirthday: string;
  socialSecurity: string;
  relationship: string;
  months: string;
  childCare: string;
  supportDocument: string;
}
function DependentForm() {
  const { register, handleSubmit } = useForm<DependentData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();

  const onSubmit = (data: DependentData) => {
    updateFormData(data);
    console.log("Saved");
    alert("Saved");
    navigate("/multistep-form/dependents");
  };
  return (
    <form
      className="grid gap-4 py-4 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="max-w-xl gap-10 flex">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="fullName">
            Primer nombre, inicial del segundo nombre y apellidos
          </Label>
          <Input
            type="text"
            id="fullName"
            placeholder="Escribe aquí..."
            {...register("dependentFullName")}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="birthday">Fecha de nacimiento (MM/DD/AA)</Label>
          <Input
            type="date"
            id="birthday"
            {...register("dependentBirthday")}
          />
        </div>
      </div>
      <div className="max-w-xl gap-10 flex">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="socialSecurity">Seguro Social</Label>
          <Input
            type="text"
            id="SocialSecurity"
            placeholder="Escribe aquí..."
            {...register("socialSecurity")}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="relationship">Parentesco</Label>
          <Input
            type="text"
            id="relationship"
            placeholder="Escribe aquí..."
            {...register("relationship")}
          />
        </div>
      </div>
      <div className="max-w-xl gap-10 flex">
        <div className=" w-full max-w-sm items-center">
          <Label htmlFor="months">
            Número de meses que vivió con usted (Max. 12)
          </Label>
          <Input
            type="number"
            id="months"
            placeholder="Escribe aquí..."
            min={1}
            {...register("months")}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="childCare">Cuidado y Gasto de los niños </Label>
          <fieldset
            id="childCare"
            {...register("childCare")}
          >
            <label htmlFor="yes">Si</label>
            <input
              id="yes"
              type="radio"
              value="yes"
              name="childCare"
            />
            <div className="">
              <Label htmlFor="supportDocument">Anexe documento soporte</Label>
              <Input
                type="file"
                {...register("supportDocument")}
              />
            </div>
            <label htmlFor="no">No</label>
            <input
              id="no"
              type="radio"
              value="no"
              name="childCare"
            />
          </fieldset>

          {/* <RadioGroup
            defaultValue="option-one"
            id="childCare"
            {...register("childCare")}
          >
            <div className=" space-x-2">
              <RadioGroupItem
                value="yes"
                id="option-one"
              />
              <Label htmlFor="option-one">Si</Label>
              <div className="">
                <Label htmlFor="supportDocument">Anexe documento soporte</Label>
                <Input
                  type="file"
                  {...register("supportDocument")}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="no"
                id="option-two"
              />
              <Label htmlFor="option-two">No</Label>
            </div>
          </RadioGroup> */}
        </div>
      </div>
      <div className="flex justify-center gap-8 border-t border-black pt-4">
        <DialogClose asChild>
          <Button type="button">Cancelar</Button>
        </DialogClose>
        <Button
          type="submit"
          className="bg-redp hover:bg-redp "
        >
          Guardar
        </Button>
      </div>
    </form>
  );
}
export default DependentForm;
