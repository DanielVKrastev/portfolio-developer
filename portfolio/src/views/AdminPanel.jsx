import { Routes, Route } from "react-router";
import Dashboard from "../components/admin/dashboard/Dashboard";
import Sidebar from "../components/admin/sidebar/Sidebar";
import ProjectsTable from "../components/admin/projects-table/ProjectsTable";
import SkillsTable from "../components/admin/skills/skillsTable";
import CertificatesTable from "../components/admin/certificates/CertificatesTable";
import ContactsTable from "../components/admin/contacts/ContactsTable";
import AboutTable from "../components/admin/about/AboutTable";
import Logout from "../components/admin/logout/Logout";

export default function AdminPanel() {

  return (
        <div className="flex min-h-screen bg-center bg-no-repeat bg-cover bg-[url('/images/background.png')] bg-gradient bg-blend-multipl dark:text-white">
          <Sidebar />
          {/* Main content */}
          <main className="flex-1 p-6 pt-16 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<ProjectsTable />} />
              <Route path="/skills" element={<SkillsTable />} />
              <Route path="/certificates" element={<CertificatesTable />} />
              <Route path="/contacts" element={<ContactsTable />} />
              <Route path="/about" element={<AboutTable />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </main>
        </div>
  );
}
