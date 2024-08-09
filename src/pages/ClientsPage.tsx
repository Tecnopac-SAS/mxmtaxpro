import { ClientsTable } from "@/components/ClientsTable";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function ClientsPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="flex justify-between w-11/12">
        <Button
          type="button"
          onClick={handleBack}
          className="bg-[#BFBFBF]"
        >
          Volver
        </Button>
        <img
          src="/icons/Vector.svg"
          alt=""
        />
      </div>
      <ClientsTable />
    </div>
  );
}
export default ClientsPage;
