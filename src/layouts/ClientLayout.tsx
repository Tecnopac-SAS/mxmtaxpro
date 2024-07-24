import SideBar from "@/components/SideBar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex">
      <SideBar />
      <main className="w-9/12">
        <Outlet />
      </main>
    </div>
  );
}
export default DashboardLayout;
