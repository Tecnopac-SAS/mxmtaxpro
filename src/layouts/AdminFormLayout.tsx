import AdminActions from "@/components/AdminActions";
import { Outlet } from "react-router-dom";

function AdminFormLayout() {
  return (
    <div>
      <Outlet />
      <AdminActions />
    </div>
  );
}
export default AdminFormLayout;
