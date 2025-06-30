import { Navigate, Outlet } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContext";


const AdminGuard = () => {
    const { admin } = useAdminContext();
    const isAuth = !!admin;

    return isAuth ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default AdminGuard;