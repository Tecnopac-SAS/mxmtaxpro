import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";

function AdminLayout() {
  return (
    <div className="flex ">
      <AdminSideBar />
      <main className="w-11/12 h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
export default AdminLayout;
