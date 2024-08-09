import { NavLink } from "react-router-dom";
export default function AdminSideBar() {
  return (
    <div className="flex flex-col items-center w-64 p-4 bg-[#FAF7F7] h-screen min-w-30 ">
      <div className="mb-8">
        <img
          src="logo.svg"
          alt="logo"
        />
      </div>
      <div className="w-full mb-8">
        <NavLink
          className="flex items-center"
          to="clients"
        >
          <img
            src="/icons/account.svg"
            className="w-5 h-5 mr-2 text-gray-400"
          />
          <h2 className="text-lg text-gray-400">Clientes</h2>
        </NavLink>
      </div>
      <div className="w-full mb-8">
        <NavLink
          className="flex items-center"
          to="account"
        >
          <img
            src="/icons/account.svg"
            className="w-5 h-5 mr-2 text-gray-400"
          />
          <h2 className="text-lg text-gray-400">Gestión Usuarios</h2>
        </NavLink>
      </div>
      <div className="w-full mb-8">
        <NavLink
          className="flex items-center"
          to="account"
        >
          <img
            src="/icons/account.svg"
            className="w-5 h-5 mr-2 text-gray-400"
          />
          <h2 className="text-lg text-gray-400">Info. personal</h2>
        </NavLink>
      </div>
      <div className="mt-auto">
        <NavLink
          to="/"
          className="flex items-center justify-center space-x-2"
        >
          <h2 className="text-lg font-bold text-red-600">Salir</h2>
          <img
            src="/icons/logout.svg"
            className="w-5 h-5 text-red-600"
          />
        </NavLink>
      </div>
    </div>
  );
}
