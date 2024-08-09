import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

type FormValues = {
  username: string;
  socialid: string;
  cellphone: string;
  email: string;
  password: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        data
      );
      console.log(response.data);
      // handle successful registration
    } catch (error) {
      console.error("Registration error", error);
      // handle registration error
    }
  };

  return (
    <Card className="mx-auto max-w-lg justify-center border-0">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">
          Hola, bienvenido al registro
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              id="name"
              type="text"
              placeholder="Usuario"
              {...register("username", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.username && (
              <span className="text-red-600">{errors.username.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electronico</Label>
            <Input
              id="email"
              type="email"
              placeholder="ejemplo@correo.com"
              {...register("email", { required: "Este campo es obligatorio" })}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="cellphone">Número de teléfono</Label>
            <Input
              id="cellphone"
              type="number"
              placeholder="Ingrese número"
              {...register("cellphone", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.cellphone && (
              <span className="text-red-600">{errors.cellphone.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="id">Últimos 4 dígitos del Social ID</Label>
            <Input
              id="socialid"
              type="number"
              placeholder="Usuario"
              min={0}
              {...register("socialid", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.socialid && (
              <span className="text-red-600">{errors.socialid.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="id">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="contraseña"
              {...register("password", {
                required: "Este campo es obligatorio",
              })}
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-red-500 text-white rounded-md flex justify-center hover:bg-red-700"
          >
            Registrar
          </Button>
        </form>
        <CardFooter className="text-sm flex justify-center">
          ¿Ya tienes una cuenta?
          <a
            href="/login"
            className="text-red-700 border-b hover:border-b-red-700 pl-2"
          >
            Ingresa aquí
          </a>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
