import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[900px] h-[480px] bg-white rounded-2xl shadow-2xl flex overflow-hidden">

        {/* LEFT SIDE – SIGN IN */}
        <div className="w-1/2 flex flex-col justify-center items-center px-10">
          <h2 className="text-3xl font-bold mb-6">Sign in</h2>

          {error && (
            <p className="text-red-500 text-sm mb-3">{error}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-100 px-4 py-3 rounded mb-4 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-gray-100 px-4 py-3 rounded mb-4 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="text-sm text-gray-500 mb-4 cursor-pointer">
            Forgot your password?
          </p>

          <button
            onClick={handleLogin}
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-2 rounded-full transition"
          >
            SIGN IN
          </button>
        </div>

        {/* RIGHT SIDE – HELLO FRIEND */}
        <div className="w-1/2 bg-[#ff4b5c] text-white flex flex-col justify-center items-center px-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
          <p className="text-sm mb-6">
            Enter your personal details and start journey with us
          </p>

          <Link
            to="/register"
            className="border border-white px-10 py-2 rounded-full hover:bg-white hover:text-[#ff4b5c] transition"
          >
            SIGN UP
          </Link>
        </div>

      </div>
    </div>
  );
}
