import FileUploadSection from "./FileUploadSection";
import { DataTable } from "./DataTable";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const YearlyDataTable = () => {
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
      <div className="flex mb-4 flex-col">
        <h2 className="border-b-black border font-semibold w-11/12">
          Año Fiscal - 2019
        </h2>
        <div>
          <DataTable />
        </div>
      </div>

      <h3 className="mt-8 font-semibold border-b-black border w-11/12">
        Por Corregir - 2019
      </h3>

      <div className="flex justify-start">
        <DataTable />
      </div>
      <h3 className="mt-8 font-semibold border-b-black border w-11/12">
        Otros archivos
      </h3>

      <FileUploadSection />
    </div>
  );
};

export default YearlyDataTable;
