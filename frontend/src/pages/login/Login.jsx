import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
      <div className="w-full max-w-md p-6 shadow-md bg-blue-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-300">
          Login <span className="text-blue-500">ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="label p-2">
              <span className="text-base sm:text-lg label-text text-gray-300">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 sm:h-12 bg-slate-900 text-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="label">
              <span className="text-base sm:text-lg label-text text-gray-300">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 sm:h-12 bg-slate-900 text-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Link
            to="/signup"
            className="text-sm sm:text-base text-gray-400 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Don't have an account?
          </Link>

          <div className="mt-6">
            <button
              className="w-full h-10 sm:h-12 bg-slate-950 text-gray-300 hover:bg-black border-none rounded-md hover:shadow-[0_10px_50px_rgba(8,_112,_184,_0.7)] duration-300 ease-in"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

//STARTER CODE FOR THIS FILE
// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 shadow-md bg-blue-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           Login <span className="text-blue-500">ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10 bg-slate-900"
//             />
//           </div>

//           <div>
//             <label className="label">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10 bg-slate-900"
//             />
//           </div>
//           <a
//             href="#"
//             className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//           >
//             Don't have an account?
//           </a>

//           <div>
//             <button className="btn btn-block btn-sm mt-2 bg-slate-950 text-gray-300 border-none">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
