import { createContext, useContext } from "react";

export const AdminContext = createContext({
  admin: null,
  setAdmin: () => null,
});

export function useAdminContext() {
    const data = useContext(AdminContext);

    return data;
}