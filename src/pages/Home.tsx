function Home() {
  return (
    <div className="">
      <img
        src="vite.svg"
        alt="logo"
        className="m-auto"
      />

      <div className="">
        <h2 className="text-lg font-bold">Hola, bienvenido</h2>
        <p>A continuación seleccione la opción que desee continuar</p>
      </div>
      <div className="flex">
        <button className="p-4">
          {" "}
          <a href="/login">Iniciar sesion</a>
        </button>
        <button className="p-4">
          <a href="/register">Registrarse</a>
        </button>
      </div>
    </div>
  );
}
export default Home;
