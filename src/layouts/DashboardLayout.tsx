import SideBar from "@/components/SideBar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex">
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default DashboardLayout;
