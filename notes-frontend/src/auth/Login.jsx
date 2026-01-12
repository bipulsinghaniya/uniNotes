// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     if (!email || !password) {
//       setError("Email and password are required");
//       return;
//     }

//     try {
//       await login(email, password);
//       navigate("/dashboard");
//     } catch {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-[900px] h-[480px] bg-white rounded-2xl shadow-2xl flex overflow-hidden">

//         {/* LEFT SIDE – SIGN IN */}
//         <div className="w-1/2 flex flex-col justify-center items-center px-10">
//           <h2 className="text-3xl font-bold mb-6">Sign in</h2>

//           {error && (
//             <p className="text-red-500 text-sm mb-3">{error}</p>
//           )}

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full bg-gray-100 px-4 py-3 rounded mb-4 outline-none"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full bg-gray-100 px-4 py-3 rounded mb-4 outline-none"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <p className="text-sm text-gray-500 mb-4 cursor-pointer">
//             Forgot your password?
//           </p>

//           <button
//             onClick={handleLogin}
//             className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-2 rounded-full transition"
//           >
//             SIGN IN
//           </button>
//         </div>

//         {/* RIGHT SIDE – HELLO FRIEND */}
//         <div className="w-1/2 bg-[#ff4b5c] text-white flex flex-col justify-center items-center px-10 text-center">
//           <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
//           <p className="text-sm mb-6">
//             Enter your personal details and start journey with us
//           </p>

//           <Link
//             to="/register"
//             className="border border-white px-10 py-2 rounded-full hover:bg-white hover:text-[#ff4b5c] transition"
//           >
//             SIGN UP
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// }







// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate, Link } from "react-router-dom";

// export default function Login() {
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     if (!email || !password) {
//       setError("Email and password are required");
//       return;
//     }

//     try {
//       await login(email, password);
//       navigate("/dashboard");
//     } catch {
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-[900px] bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden md:h-[480px]">

//         {/* LEFT – SIGN IN */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-10 py-10">
//           <h2 className="text-3xl font-bold mb-6">Sign in</h2>

//           {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full bg-gray-100 px-4 py-3 rounded mb-4 outline-none"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full bg-gray-100 px-4 py-3 rounded mb-4 outline-none"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <p className="text-sm text-gray-500 mb-4 cursor-pointer">
//             Forgot your password?
//           </p>

//           <button
//             onClick={handleLogin}
//             className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-2 rounded-full transition"
//           >
//             SIGN IN
//           </button>
//         </div>

//         {/* RIGHT – HELLO FRIEND */}
//         <div className="w-full md:w-1/2 bg-[#ff4b5c] text-white flex flex-col justify-center items-center px-6 md:px-10 py-10 text-center">
//           <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>

//           {/* UniNotes Branding */}
//           <p className="text-lg font-semibold mb-2 tracking-wide">
//             Welcome to <span className="text-yellow-200">UniNotes</span>
//           </p>

//           <p className="text-sm mb-6">
//             Enter your personal details and start your learning journey with us
//           </p>

//           <Link
//             to="/register"
//             className="border border-white px-10 py-2 rounded-full hover:bg-white hover:text-[#ff4b5c] transition"
//           >
//             SIGN UP
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// }




///////////////////////// claude ai ////////////////////////////////







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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 px-4 py-8 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="w-full max-w-[1000px] bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden md:h-[580px] relative z-10">
        
        {/* LEFT – SIGN IN */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 md:px-12 py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="w-full max-w-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-4 shadow-lg">
                <span className="text-3xl">🔐</span>
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Sign In
              </h2>
              <p className="text-gray-500 text-sm">Welcome back to UniNotes</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-400">📧</span>
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white border-2 border-gray-200 pl-12 pr-4 py-3.5 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-400">🔒</span>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-white border-2 border-gray-200 pl-12 pr-4 py-3.5 rounded-xl outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="text-right">
                <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold transition">
                  Forgot password?
                </button>
              </div>

              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
              >
                SIGN IN
              </button>
            </div>

            {/* Mobile only - Sign up link */}
            <div className="mt-6 text-center md:hidden">
              <p className="text-gray-600 text-sm">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 font-bold hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT – HELLO FRIEND */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white flex flex-col justify-center items-center px-8 md:px-12 py-12 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-5 rounded-full"></div>
          
          <div className="relative z-10">
            <div className="mb-8">
        <div className="inline-flex items-center justify-center bg-blue-700 px-6 py-3 rounded-2xl mb-6 shadow-lg">
  <span className="text-3xl font-bold text-white">
    📚 UniNotes
  </span>
</div>

            </div>
            
            <h2 className="text-5xl font-bold mb-4 drop-shadow-lg">
              Hello, Friend! 👋
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xs mx-auto leading-relaxed">
              Enter your personal details and start your learning journey with us
            </p>
            
    <Link
  to="/register"
  className="inline-block bg-white text-blue-600 px-12 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-600 hover:text-white transition-all"
>
  SIGN UP
</Link>


          </div>
        </div>
      </div>
    </div>
  );
}