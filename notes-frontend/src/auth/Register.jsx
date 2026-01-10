// import { useState } from "react";
// import api from "../api/axios";
// import { useNavigate, Link } from "react-router-dom";

// export default function Register() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async () => {
//     setError("");

//     if (!form.name || !form.email || !form.password) {
//       setError("All fields are required");
//       return;
//     }

//     try {
//       await api.post("/auth/register", form);
//       alert("Registered successfully");
//       navigate("/login");
//     } catch (err) {
//       console.log(err.response?.data); // 🔥 IMPORTANT
//       setError(err.response?.data || "Registration failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-[900px] h-[480px] bg-white rounded-2xl shadow-2xl flex overflow-hidden">

//         {/* LEFT */}
//         <div className="w-1/2 bg-orange-500 text-white flex flex-col justify-center items-center px-10 text-center">
//           <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
//           <p>Create your account</p>
//           <Link
//             to="/login"
//             className="mt-6 border border-white px-10 py-2 rounded-full hover:bg-white hover:text-orange-500 transition"
//           >
//             SIGN IN
//           </Link>
//         </div>

//         {/* RIGHT */}
//         <div className="w-1/2 flex flex-col justify-center px-10">
//           <h2 className="text-3xl font-bold mb-6">Register</h2>

//           {error && <p className="text-red-500 mb-3">{error}</p>}

//           <input
//             name="name"
//             placeholder="Name"
//             className="w-full bg-gray-100 px-4 py-3 rounded mb-4"
//             onChange={handleChange}
//           />

//           <input
//             name="email"
//             placeholder="Email"
//             className="w-full bg-gray-100 px-4 py-3 rounded mb-4"
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full bg-gray-100 px-4 py-3 rounded mb-4"
//             onChange={handleChange}
//           />

//           <button
//             onClick={handleRegister}
//             className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-2 rounded-full"
//           >
//             REGISTER
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }











import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      await api.post("/auth/register", form);
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
      console.log(err.response?.data); // 🔥 IMPORTANT
      setError(err.response?.data || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[900px] h-[480px] bg-white rounded-2xl shadow-2xl flex overflow-hidden">

        {/* LEFT */}
        <div className="w-1/2 bg-orange-500 text-white flex flex-col justify-center items-center px-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
          <p>Create your account</p>
          <Link
            to="/login"
            className="mt-6 border border-white px-10 py-2 rounded-full hover:bg-white hover:text-orange-500 transition"
          >
            SIGN IN
          </Link>
        </div>

        {/* RIGHT */}
        <div className="w-1/2 flex flex-col justify-center px-10">
          <h2 className="text-3xl font-bold mb-6">Register</h2>

          {error && <p className="text-red-500 mb-3">{error}</p>}

          <input
            name="name"
            placeholder="Name"
            className="w-full bg-gray-100 px-4 py-3 rounded mb-4"
            onChange={handleChange}
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full bg-gray-100 px-4 py-3 rounded mb-4"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-gray-100 px-4 py-3 rounded mb-4"
            onChange={handleChange}
          />

          <button
            onClick={handleRegister}
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-2 rounded-full"
          >
            REGISTER
          </button>
        </div>

      </div>
    </div>
  );
}









