import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <header className="fixed flex justify-between w-full px-5">
        <a
          href="/"
          className="flex items-center gap-2 md:pl-20 text-lg font-semibold"
        >
          <img
            src="/icons/back.svg"
            alt="back"
            height={10}
            width={10}
          />{" "}
          Volver
        </a>
        <img
          height={80}
          width={80}
          src="/logo.svg"
          alt="logo"
        />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
