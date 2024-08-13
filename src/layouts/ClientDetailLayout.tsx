import { Separator } from "@/components/ui/separator";
import { Outlet } from "react-router-dom";

function ClientDetailLayout() {
  return (
    <div>
      <h2 className="text-blue-700 font-semibold">Clientes</h2>
      <h3 className="font-semibold">
        Cliente- <span className="text-redp ">Daniel Velez</span>
      </h3>
      <Separator />
      <Outlet />
    </div>
  );
}
export default ClientDetailLayout;
