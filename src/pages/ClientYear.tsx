import { useNavigate } from "react-router-dom";

function ClientYear() {
  const navigate = useNavigate();
  const handleConsult = () => {
    navigate("/admin/detail/client-year-data");
  };
  return (
    <div>
      <p className="py-5 font-semibold">
        Seleccione el año fiscal que desea consultar
      </p>

      <div className="max-w-56">
        <label htmlFor="year">Año fiscal</label>
        <select
          className="w-full"
          name="fiscal-year"
          id="year"
          required
        >
          <option
            value=""
            disabled
            hidden
          >
            Selecciona
          </option>
          <option value="2021">Año-2021</option>
          <option value="2022">Año-2022</option>
          <option value="2023">Año-2023</option>
          <option value="2024">Año-2024</option>
        </select>
        <button
          onClick={handleConsult}
          className="w-full bg-redp text-white rounded-sm  p-2 mt-2"
        >
          Consultar
        </button>
      </div>
    </div>
  );
}
export default ClientYear;
