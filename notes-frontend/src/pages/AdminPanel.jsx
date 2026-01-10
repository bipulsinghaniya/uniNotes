import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminPanel() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({
    course: "CSE",
    year: 1,
    semester: 1,
    subject: "",
    chapter: "",
    title: "",
    driveLink: ""
  });

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await api.get("/notes/all");
    setNotes(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addNote = async () => {
    await api.post("/notes/create", form);
    fetchNotes();
  };

  const deleteNote = async (id) => {
    await api.delete(`/notes/delete/${id}`);
    fetchNotes();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0f172a] text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-4">
          <li className="font-semibold">Dashboard</li>
          <li className="opacity-80">Add Notes</li>
          <li className="opacity-80">Manage Notes</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-5 rounded shadow">
            <p className="text-gray-500">Total Notes</p>
            <h2 className="text-2xl font-bold">{notes.length}</h2>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <p className="text-gray-500">Courses</p>
            <h2 className="text-2xl font-bold">5</h2>
          </div>
          <div className="bg-white p-5 rounded shadow">
            <p className="text-gray-500">Subjects</p>
            <h2 className="text-2xl font-bold">32</h2>
          </div>
        </div>

        {/* ADD NOTES */}
        <div className="bg-white p-6 rounded shadow mb-6">
          <h3 className="text-lg font-bold mb-4">Add New Notes</h3>

          <div className="grid grid-cols-2 gap-4">
            <input name="course" value={form.course} onChange={handleChange}
              className="border p-2 rounded" placeholder="Course" />

            <input name="year" type="number" value={form.year} onChange={handleChange}
              className="border p-2 rounded" placeholder="Year" />

            <input name="semester" type="number" value={form.semester} onChange={handleChange}
              className="border p-2 rounded" placeholder="Semester" />

            <input name="subject" value={form.subject} onChange={handleChange}
              className="border p-2 rounded" placeholder="Subject" />

            <input name="chapter" value={form.chapter} onChange={handleChange}
              className="border p-2 rounded" placeholder="Chapter" />

            <input name="title" value={form.title} onChange={handleChange}
              className="border p-2 rounded" placeholder="Title" />

            <input name="driveLink" value={form.driveLink} onChange={handleChange}
              className="border p-2 rounded col-span-2" placeholder="Google Drive Link" />
          </div>

          <button
            onClick={addNote}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add Note
          </button>
        </div>

        {/* MANAGE NOTES */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-bold mb-4">Manage Notes</h3>

          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Course</th>
                <th>Year</th>
                <th>Sem</th>
                <th>Subject</th>
                <th>Chapter</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((n) => (
                <tr key={n._id} className="text-center border-t">
                  <td>{n.course}</td>
                  <td>{n.year}</td>
                  <td>{n.semester}</td>
                  <td>{n.subject}</td>
                  <td>{n.chapter}</td>
                  <td>
                    <button
                      onClick={() => deleteNote(n._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}
