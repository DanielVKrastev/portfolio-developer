import { useEffect, useState } from "react";
import { Plus, Pencil, Trash, X } from "lucide-react";
import certificatesApi from "../../../api/certificatesApi";
import ModalCertificate from "./modal-certificate/ModalCertificate";
import { useAdminContext } from "../../../contexts/AdminContext";

export default function CertificatesTable() {
  const { admin } = useAdminContext();
  const accessToken = admin.accessToken;

  const [modalOpen, setModalOpen] = useState(false);
  const [current, setCurrent] = useState(null); // null → add, object → edit

  const initialForm = {
    name: "",
    issuedBy: "",
    certificateUrl: "",
  };

  const [form, setForm] = useState(initialForm);
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    async function getAllFetching() {
      const data = await certificatesApi.getAll();
      setCertificates(data);
    }

    getAllFetching();
  }, []);

  const openAdd = () => {
    setCurrent(null);
    setForm(initialForm);
    setModalOpen(true);
  };

  const openEdit = (cert) => {
    setCurrent(cert);
    setForm(cert);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (current) {
      //update
      await certificatesApi.update(accessToken, current._id, form);
      setCertificates((prev) =>
        prev.map((c) => (c._id === current._id ? { ...current, ...form } : c))
      );
    } else {
      // add
      const data = await certificatesApi.create(accessToken, form);
      setCertificates((prev) => [
        ...prev,
        { _id: data._id, ...form },
      ]);
    }
    closeModal();
  };

  const deleteCertificate = async (id) => {
    if (confirm("Are you sure you want to delete the certificate?")) {
      // delete
      await certificatesApi.delete(accessToken, id);
      setCertificates((prev) => prev.filter((c) => c._id !== id));
    }
  };

  return (
    <section id="certificates" className="mx-auto max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Certificates</h1>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <Plus className="h-4 w-4" /> Add certificate
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">#</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Issued By</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">URL</th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-800 dark:bg-gray-900">
            {certificates.map((c, idx) => (
              <tr key={c._id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-3 text-sm whitespace-nowrap">{idx + 1}</td>
                <td className="px-4 py-3 text-sm font-medium whitespace-nowrap">{c.name}</td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">{c.issuedBy}</td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  <a
                    href={c.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </a>
                </td>
                <td className="px-4 py-3 text-sm whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEdit(c)}
                      className="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => deleteCertificate(c._id)}
                      className="rounded p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <Trash className="h-4 w-4 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ─ Modal ─ */}
      {modalOpen && <ModalCertificate
        id={form?._id}
        current={current}
        closeModal={closeModal}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />}
    </section>
  );
}