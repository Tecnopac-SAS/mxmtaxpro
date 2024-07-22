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

export default function RegisterForm() {
  return (
    <Card className="mx-auto max-w-lg justify-center border-0">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">
          Hola, bienvenido al registro
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Nombre</Label>
            <Input
              id="nombre"
              type="text"
              placeholder="Usuario"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Correo electronico</Label>
            <Input
              id="nombre"
              type="text"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Numero de teléfono</Label>
            <Input
              id="tel"
              type="number"
              placeholder="Ingrese número"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Últimos 4 dígitos del Social ID</Label>
            <Input
              id="id"
              type="number"
              placeholder="Usuario"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-redp text-white rounded-md flex justify-center hover:bg-red-500"
          >
            Registrar
          </Button>
        </form>
        <CardFooter className="text-sm flex justify-center">
          ¿Ya tienes una cuenta?{" "}
          <a
            href="login"
            className="text-red-700 border-b hover:border-b-red-700
              pl-2"
          >
            Ingresa aquí
          </a>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
