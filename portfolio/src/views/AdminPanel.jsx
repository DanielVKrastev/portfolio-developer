import { Routes, Route } from "react-router";
import Dashboard from "../components/admin/dashboard/Dashboard";
import Sidebar from "../components/admin/sidebar/Sidebar";

export default function AdminPanel() {

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Sidebar />

        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    </div>
  );
}
