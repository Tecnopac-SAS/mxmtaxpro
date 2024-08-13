import { Outlet, useNavigate } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";
import { Button } from "@/components/ui/button";

function AdminLayout() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex ">
      <AdminSideBar />
      <main className="w-11/12 h-screen overflow-y-auto">
        <div className="flex justify-between w-11/12">
          <Button
            type="button"
            onClick={handleBack}
            className="bg-[#BFBFBF]"
          >
            Volver
          </Button>
          <img
            src="/icons/Vector.svg"
            alt=""
          />
        </div>
        <Outlet />
      </main>
    </div>
  );
}
export default AdminLayout;
