import SideBar from "@/components/SideBar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex ">
      <SideBar />
      <main className="w-11/12 h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
export default DashboardLayout;
