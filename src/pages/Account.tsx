import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  socialId: string;
};

function Account() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<FormValues | null>(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormValues>();

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    setTimeout(() => {
      const mockUserData: FormValues = {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
        socialId: "1234",
      };
      setUserData(mockUserData);
      reset(mockUserData);
    }, 1000);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Simulate PUT request
    setTimeout(() => {
      setUserData(data);
      setIsEditing(false);
      console.log("Updated user data:", data);
      // You could add a success message here
    }, 20000);
  };

  const handleEdit = () => {
    setIsEditing(true);
    if (userData) {
      Object.keys(userData).forEach((key) => {
        setValue(key as keyof FormValues, userData[key as keyof FormValues]);
      });
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-between w-11/12">
        {" "}
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
      <h2 className="border border-b-black mt-20 w-11/12">Gestión de cuenta</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            type="text"
            placeholder="Usuario"
            {...register("name", { required: "Este campo es obligatorio" })}
            disabled={!isEditing}
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            type="email"
            placeholder="ejemplo@correo.com"
            {...register("email", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Dirección de correo inválida",
              },
            })}
            disabled={!isEditing}
          />
          {errors.email && (
            <span className="text-red-600">{errors.email.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Número de teléfono</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Ingrese número"
            {...register("phone", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Número de teléfono inválido",
              },
            })}
            disabled={!isEditing}
          />
          {errors.phone && (
            <span className="text-red-600">{errors.phone.message}</span>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="socialId">Últimos 4 dígitos del Social ID</Label>
          <Input
            id="socialId"
            type="text"
            placeholder="Últimos 4 dígitos"
            maxLength={4}
            {...register("socialId", {
              required: "Este campo es obligatorio",
              pattern: {
                value: /^[0-9]{4}$/,
                message: "Debe ser 4 dígitos numéricos",
              },
            })}
            disabled={!isEditing}
          />
          {errors.socialId && (
            <span className="text-red-600">{errors.socialId.message}</span>
          )}
        </div>
        <div className="pt-20">
          {" "}
          {isEditing ? (
            <Button
              type="submit"
              className="bg-red-600 "
            >
              Guardar
            </Button>
          ) : (
            <Button
              type="button"
              onClick={handleEdit}
              className="bg-red-600 mr-4"
            >
              Editar
            </Button>
          )}
          <Button
            type="button"
            onClick={handleBack}
            className="bg-[#BFBFBF]"
          >
            Volver
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Account;
