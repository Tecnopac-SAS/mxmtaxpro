import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <Card className="mx-auto max-w-lg justify-center border-0">
      <CardHeader className="space-y-1">
        <img
          src="vite.svg"
          width={80}
          height={70}
          className="m-auto"
          alt=""
        />
        <CardTitle className="text-2xl font-bold">Hola, bienvenido</CardTitle>
        <CardDescription>
          A continuación seleccione la opción que desee continuar
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-center">
          <Button className="w-fit text-white rounded-full flex justify-center">
            Ingresar
          </Button>
          <Button className="w-fit text-white rounded-full flex justify-center">
            Registrarse
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
export default Home;
