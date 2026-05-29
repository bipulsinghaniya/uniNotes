import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./authSlice";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./auth/ProtectedRoute";
import Navbar from "./components/Navbar";

import CheckEmail from "./pages/CheckEmail";
import VerifyEmail from "./pages/VerifyEmail";

export default function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading } = useSelector((state) => state.auth);
  const [initialChecked, setInitialChecked] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(checkAuth()).finally(() => setInitialChecked(true));
  }, [dispatch]);

  const hideNavbar =
    location.pathname === "/login" || location.pathname === "/register";

  if (!initialChecked && loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      {!hideNavbar && isAuthenticated && user && <Navbar />}

      <Routes>
        {/* Public */}
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />} />
        {/* User + Admin */}
        <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
        {/* Admin only */}
        <Route  path="/admin" element={ <ProtectedRoute admin>   <AdminPanel /> </ProtectedRoute>}/>

        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* Default */}
        <Route  path="*"  element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />} />
      </Routes>
    </>
  );
}



