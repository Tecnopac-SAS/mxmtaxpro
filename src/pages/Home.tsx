import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

function Home() {
  return (
    <div className="flex items-center h-screen">
      <Card className="mx-auto max-w-lg justify-center items-center border-0">
        <CardHeader className="space-y-1">
          <img
            src="logo.svg"
            width={80}
            height={80}
            className="m-auto pb-5"
            alt="maximo tax logo"
          />
          <CardTitle className="text-2xl font-bold">Hola, bienvenido</CardTitle>
          <CardDescription className="text-lg text-black">
            A continuación seleccione la opción que desee continuar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 justify-center">
            <a href="/login">
              <button className="bg-secondary text-secondary-foreground text-lg font-bold hover:bg-secondary/80 py-2 px-4 rounded-lg flex flex-col items-center">
                Iniciar Sesión
                <img
                  aria-hidden="true"
                  alt="login"
                  src="/icons/login-icon.svg"
                  className="mt-2"
                />
              </button>
            </a>
            <a href="/register">
              <button className="bg-secondary text-secondary-foreground text-lg font-bold hover:bg-secondary/80 py-2 px-4 rounded-lg flex flex-col items-center">
                Registrarse
                <img
                  aria-hidden="true"
                  alt="Registrarse icon"
                  src="/icons/register-icon.svg"
                  className="mt-2"
                />
              </button>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default Home;
