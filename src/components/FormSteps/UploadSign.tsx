import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/FormContext";
import Buttons from "../Buttons";
import { useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
interface SignFileData {
  uploadSign: string;
}
function UploadSign() {
  const { register, handleSubmit } = useForm<SignFileData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();
  const onSubmit = (data: SignFileData) => {
    updateFormData(data);
    navigate("/multistep-form/review");
  };
  return (
    <>
      <div className="flex pb-40">
        <div className="flex-col m-auto">
          <p className="pb-4">Cargue el archivo de su firma</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Label
              htmlFor="sign"
              className="border-b border-black"
            >
              Firma del contribuyente
            </Label>
            <Input
              {...register("uploadSign")}
              type="file"
              id="uploadSign"
            />
            <Buttons />
          </form>
        </div>
      </div>
    </>
  );
}
export default UploadSign;
