import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="font-bold text-lg">UniNotes</h1>

      <div className="flex items-center gap-4">
        <Link to="/dashboard">Dashboard</Link>

        {user?.role === "admin" && (
          <Link to="/admin" className="bg-white text-blue-600 px-3 py-1 rounded">
            Admin Panel
          </Link>
        )}

        <button onClick={logout}  className="bg-red-500 px-3 py-1 rounded" >
          Logout
        </button>
      </div>
    </nav>
  );
}
