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

type FormValues = {
  nombre: string;
  email: string;
  tel: string;
  id: string;
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
      const response = await axios.post("/api/register", data);
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
              id="nombre"
              type="text"
              placeholder="Usuario"
              {...register("nombre", { required: "Este campo es obligatorio" })}
            />
            {errors.nombre && (
              <span className="text-red-600">{errors.nombre.message}</span>
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
            <Label htmlFor="tel">Número de teléfono</Label>
            <Input
              id="tel"
              type="number"
              placeholder="Ingrese número"
              {...register("tel", { required: "Este campo es obligatorio" })}
            />
            {errors.tel && (
              <span className="text-red-600">{errors.tel.message}</span>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="id">Últimos 4 dígitos del Social ID</Label>
            <Input
              id="id"
              type="number"
              placeholder="Usuario"
              {...register("id", { required: "Este campo es obligatorio" })}
            />
            {errors.id && (
              <span className="text-red-600">{errors.id.message}</span>
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
