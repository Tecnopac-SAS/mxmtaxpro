import { useForm } from "react-hook-form";
import { useFormContext } from "../../context/FormContext";
import { useNavigate } from "react-router-dom";
import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface SignFileData {
  sign: string;
}

function Sign() {
  const { register, handleSubmit, setValue } = useForm<SignFileData>();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate();
  const signatureRef = useRef<SignatureCanvas | null>(null);

  const onSubmit = (data: SignFileData) => {
    const res = signatureRef.current?.getTrimmedCanvas().toDataURL("image/jpg");
    if (res) {
      updateFormData(data);
      console.log("", res);
      navigate("/multistep-form/review");
    }
  };

  const clearHandler = () => {
    signatureRef.current?.clear();
    setValue("sign", "");
  };
  const onBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex pb-20">
      <div className="flex-col m-auto">
        <p className="pb-4">Dibuje su firma aquí</p>
        <div className="border-gray-400 rounded-md border max-w-80 md:max-w-[400px]">
          <SignatureCanvas
            ref={signatureRef}
            penColor="red"
            canvasProps={{
              width: 400,
              height: 200,
              className: "sigCanvas",
            }}
            onEnd={() => {
              const res = signatureRef.current
                ?.getTrimmedCanvas()
                .toDataURL("image/jpg");
              if (res) {
                setValue("sign", res);
              }
            }}
          />
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              // className="hidden"
              type="text"
              id="sign"
              {...register("sign")}
              readOnly
            />

            <div className="flex justify-end border-t gap-7 border-gray-500 my-auto pt-5">
              <div>
                <button
                  type="button"
                  onClick={clearHandler}
                >
                  Clear
                </button>
              </div>
              <Button
                type="button"
                onClick={onBack}
              >
                Volver
              </Button>
              <Button
                className="bg-redp hover:bg-redp w-40"
                type="submit"
              >
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;
