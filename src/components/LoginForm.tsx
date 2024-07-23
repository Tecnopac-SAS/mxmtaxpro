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
import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name);
    console.log(phone);
    try {
      const response = await axios.post("/api/login", { name, phone });
      console.log(response.data);
      // handle successful login
    } catch (error) {
      console.error("Login error", error);
      // handle login error
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
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <Label htmlFor="email">Nombre</Label>
            <Input
              id="name"
              type="text"
              placeholder="Usuario"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Teléfono</Label>
            <Input
              id="phone"
              type="number"
              placeholder="Ingrese Número"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-red-500 text-white rounded-md flex justify-center hover:bg-red-700"
          >
            <NavLink to="/code">Ingresar</NavLink>
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
