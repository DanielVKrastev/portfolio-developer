import { useEffect, useState } from "react";
import useAdminState from "../hooks/useAdminState";
import { AdminContext } from "../contexts/AdminContext";

export function AdminProvider({ children }) {
  const [admin, setAdmin] = useAdminState("admin", null);
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);   

  return (
    <AdminContext.Provider value={{ admin, setAdmin, ready }}>
      {children}
    </AdminContext.Provider>
  );
}