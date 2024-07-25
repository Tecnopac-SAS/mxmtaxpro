import FileUploadSection from "./FileUploadSection";
import { DataTable } from "./DataTable";

const YearlyDataTable = () => {
  return (
    <div>
      <div className="flex mb-4 flex-col">
        <h2 className="border-b-black border w-11/12 font-semibold">
          Año Fiscal - 2019
        </h2>
        <div className="flex justify-start">
          <DataTable />
        </div>
      </div>

      <h3 className="mt-8 font-semibold border-b-black border w-11/12">
        Por Corregir - 2019
      </h3>

      <h3 className="mt-8 font-semibold border-b-black border w-11/12">
        Otros archivos
      </h3>

      <FileUploadSection />
    </div>
  );
};

export default YearlyDataTable;
