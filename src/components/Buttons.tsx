import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

function Buttons() {
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex justify-end border-t gap-7 border-gray-500 my-auto pt-5">
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
        Siguiente
      </Button>
    </div>
  );
}
export default Buttons;
