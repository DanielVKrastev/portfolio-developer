import { Navigate } from "react-router";
import authApi from "../../../api/authApi";
import { useAdminContext } from "../../../contexts/AdminContext";
import { useEffect, useState } from "react";

export default function Logout() {
    const { admin, setAdmin } = useAdminContext();
    setAdmin(null);
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    useEffect(() => {
        async function logout() {
            const res = await authApi.logout(admin.accessToken);
            setIsLoggedOut(res);
        }

        logout();
        
    });

    return isLoggedOut
        ? <Navigate to="/admin/login" />
        : <h1>logout</h1>; // spinner is better
}