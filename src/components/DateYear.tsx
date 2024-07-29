import { useForm } from "react-hook-form";
import { useFormContext } from "../providers/FormProvider.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const DateYear = () => {
  const [, dispatch] = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "CHANGE_PERCENT", data: 42 });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const onSubmit = (values) => {
    if (isValid) {
      dispatch({ type: "SET_ADDRESS_DATA", data: values });
      navigate("/description");
    }
  };

  return (
    <>
      <h2>Dirección</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Calle</label>
          <input
            type="text"
            className="form-control"
            {...register("street")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Número</label>
          <input
            type="number"
            className="form-control"
            {...register("number")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Código Postal</label>
          <input
            type="text"
            className="form-control"
            {...register("postal_code")}
          />
        </div>
        <input
          type="submit"
          className="btn btn-info"
          value="Siguiente"
        />
      </form>
    </>
  );
};

export default DateYear;
