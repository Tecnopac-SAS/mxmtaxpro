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
import { NavLink } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import axios from "axios";

type FormValues = {
  name: string;
  phone: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);

    try {
      const response = await axios.post(
        `${process.env.API_URL}/auth/login`,
        data
      );
      console.log(response.data);
      // handle successful login
    } catch (error) {
      console.error("Login error", error);
      // handle login error
      console.log(error);
    }
  };

  return (
    <Card className="mx-auto max-w-lg justify-center border-0">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">
          Hola, bienvenido al ingreso
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              type="text"
              placeholder="Usuario"
              {...register("name", { required: "Este campo es obligatorio" })}
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              type="number"
              placeholder="Ingrese Número"
              {...register("phone", { required: "Este campo es obligatorio" })}
            />
            {errors.phone && (
              <span className="text-red-600">{errors.phone.message}</span>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-red-500 text-white rounded-md flex justify-center hover:bg-red-700"
          >
            Ingresar
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-sm">
        ¿Aún no tienes una cuenta?{" "}
        <NavLink
          to="/register"
          className="text-red-700 border-b hover:border-b-red-700 pl-2"
        >
          Regístrate
        </NavLink>
      </CardFooter>
    </Card>
  );
}
