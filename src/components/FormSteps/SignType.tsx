import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

function SignType() {
  const handleFile = () => {
    navigate("/multistep-form/upload-sign");
  };
  const handleSign = () => {
    navigate("/multistep-form/sign");
  };
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="flex pb-40">
        <div className="flex-col m-auto">
          <p className="pb-4">A continuación, seleccione como desea firmar</p>
          <button
            onClick={handleFile}
            className="bg-secondary text-secondary-foreground text-lg font-bold hover:bg-secondary/80 py-2 px-4 rounded-lg flex items-center gap-20
        mb-4"
          >
            Cargar Firma
            <img
              aria-hidden="true"
              alt="Registrarse icon"
              src="/icons/register-icon.svg"
              className="mt-2"
            />
          </button>
          <button
            onClick={handleSign}
            className="bg-secondary text-secondary-foreground text-lg font-bold hover:bg-secondary/80 py-2 px-4 rounded-lg flex items-center gap-10"
          >
            Firmar en Pantalla
            <img
              aria-hidden="true"
              alt="Registrarse icon"
              src="/icons/register-icon.svg"
              className="mt-2"
            />
          </button>
        </div>
      </div>

      <div className="flex justify-end border-t gap-7 border-gray-500 my-auto pt-5">
        <Button
          type="button"
          onClick={onBack}
        >
          Volver
        </Button>
      </div>
    </>
  );
}
export default SignType;
