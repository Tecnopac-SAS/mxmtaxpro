function LoginForm() {
  return (
    <form
      className=""
      action=""
    >
      <label htmlFor="user">Nombre</label>
      <input
        type="text"
        placeholder="Usuario"
        id="user"
      />
      <label htmlFor="number">Número de teléfono</label>

      <input
        type="number"
        placeholder="Ingrese número"
        id="number"
      />
      <button
        type="submit"
        className="bg-red-600 p-2 rounded-sm text-white"
      >
        Ingresar
      </button>
    </form>
  );
}
export default LoginForm;
