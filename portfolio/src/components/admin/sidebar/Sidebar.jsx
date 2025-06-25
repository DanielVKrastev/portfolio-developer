import { useState } from "react";
import { Menu } from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contacts", href: "#" },
  { name: "Settings", href: "#" },
];

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="fixed left-4 top-4 z-50 rounded p-2 text-white shadow md:hidden bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar (desktop + mobile) */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform bg-gray-800 text-white transition-transform duration-300 md:static md:translate-x-0 ${
  sidebarOpen ? "translate-x-0" : "-translate-x-full"
}`}
      >
        <div className="border-b border-gray-700 p-6 text-2xl font-bold">⚙️ Admin</div>
        <nav className="mt-6 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-6 py-3 hover:bg-gray-700"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </aside>
      </>
  );
}