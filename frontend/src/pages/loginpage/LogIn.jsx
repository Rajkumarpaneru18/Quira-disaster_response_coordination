import { useState } from "react";
import { Link } from "react-router-dom";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-8">Welcome back</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <Link to="/mainpage">
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-md font-bold my-7"
            >
              Log in
            </button>
          </Link>
          <div className="text-right">
            <a href="#" className="text-red-500 hover:underline text-sm">
              Forgot your username or password?
            </a>
          </div>
        </form>
        <Link to="/register">
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600">
              New to Disaster Response?{" "}
              <span className="text-red-500 hover:underline">
                Register Here
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LogIn;
