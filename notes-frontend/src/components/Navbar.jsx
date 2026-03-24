// import { useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export default function Navbar() {
//   const { user, logout } = useContext(AuthContext);
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="sticky top-0 z-50 glass-strong shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
      
//         <Link to="/dashboard" className="flex items-center gap-2 group">
//           <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-indigo-300 transition-shadow duration-300">
//             <span className="text-white font-bold text-sm">U</span>
//           </div>
//           <span className="font-extrabold text-xl tracking-tight">
//             <span className="gradient-text">Uni</span>
//             <span className="text-gray-800">Notes</span>
//           </span>
//         </Link>

//         {/* Right side */}
//         <div className="flex items-center gap-2">
//           <Link
//             to="/dashboard"
//             className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
//               isActive("/dashboard")
//                 ? "bg-indigo-50 text-indigo-700"
//                 : "text-gray-600 hover:text-indigo-700 hover:bg-indigo-50/60"
//             }`}
//           >
//             Dashboard
//           </Link>

//           {user?.role === "admin" && (
//             <Link
//               to="/admin"
//               className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
//                 isActive("/admin")
//                   ? "bg-purple-50 text-purple-700"
//                   : "text-gray-600 hover:text-purple-700 hover:bg-purple-50/60"
//               }`}
//             >
//               Admin Panel
//             </Link>
//           )}

//           <div className="w-px h-6 bg-gray-200 mx-1"></div>

//           <button
//             onClick={logout}
//             className="px-4 py-2 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 cursor-pointer"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }





import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

        .navbar-root {
          font-family: 'Nunito', sans-serif;
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1.5px solid rgba(99, 102, 241, 0.10);
          box-shadow: 0 2px 24px 0 rgba(99,102,241,0.07);
        }

        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .navbar-logo-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, #4f8ef7 0%, #6c63ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(108, 99, 255, 0.35);
          transition: box-shadow 0.2s, transform 0.2s;
        }

        .navbar-logo:hover .navbar-logo-icon {
          box-shadow: 0 6px 22px rgba(108, 99, 255, 0.5);
          transform: translateY(-1px) scale(1.04);
        }

        .navbar-logo-icon img {
          width: 22px;
          height: 22px;
        }

        .navbar-logo-text {
          font-size: 1.35rem;
          font-weight: 900;
          letter-spacing: -0.5px;
          line-height: 1;
        }

        .navbar-logo-uni {
          background: linear-gradient(90deg, #4f8ef7, #6c63ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .navbar-logo-notes {
          color: #1e293b;
        }

        /* Nav links */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .navbar-link {
          padding: 8px 18px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.18s, color 0.18s, box-shadow 0.18s;
          color: #64748b;
          letter-spacing: 0.01em;
        }

        .navbar-link:hover {
          background: rgba(79, 142, 247, 0.08);
          color: #4f8ef7;
        }

        .navbar-link.active-dashboard {
          background: linear-gradient(135deg, rgba(79,142,247,0.13), rgba(108,99,255,0.10));
          color: #4f8ef7;
          box-shadow: inset 0 0 0 1.5px rgba(79,142,247,0.18);
        }

        .navbar-link.active-admin {
          background: linear-gradient(135deg, rgba(108,99,255,0.13), rgba(168,85,247,0.10));
          color: #6c63ff;
          box-shadow: inset 0 0 0 1.5px rgba(108,99,255,0.18);
        }

        .navbar-divider {
          width: 1.5px;
          height: 24px;
          background: rgba(99,102,241,0.13);
          border-radius: 4px;
          margin: 0 6px;
        }

        /* Logout button */
        .navbar-logout {
          padding: 8px 18px;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          border: none;
          background: transparent;
          color: #ef4444;
          cursor: pointer;
          transition: background 0.18s, color 0.18s, box-shadow 0.18s;
          letter-spacing: 0.01em;
          font-family: 'Nunito', sans-serif;
        }

        .navbar-logout:hover {
          background: rgba(239,68,68,0.08);
          color: #dc2626;
          box-shadow: inset 0 0 0 1.5px rgba(239,68,68,0.18);
        }
      `}</style>

      <nav className="navbar-root">
        <div className="navbar-inner">
          {/* Logo */}
          <Link to="/dashboard" className="navbar-logo">
            <div className="navbar-logo-icon">
              {/* Inline lock emoji SVG to match the login page icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="11" width="14" height="10" rx="3" fill="white" fillOpacity="0.95"/>
                <path d="M8 11V7a4 4 0 0 1 8 0v4" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1.5" fill="#6c63ff"/>
              </svg>
            </div>
            <span className="navbar-logo-text">
              <span className="navbar-logo-uni">Uni</span>
              <span className="navbar-logo-notes">Notes</span>
            </span>
          </Link>

          {/* Right side */}
          <div className="navbar-links">
            <Link
              to="/dashboard"
              className={`navbar-link ${isActive("/dashboard") ? "active-dashboard" : ""}`}
            >
              Dashboard
            </Link>

            {user?.role === "admin" && (
              <Link
                to="/admin"
                className={`navbar-link ${isActive("/admin") ? "active-admin" : ""}`}
              >
                Admin Panel
              </Link>
            )}

            <div className="navbar-divider" />

            <button className="navbar-logout" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}