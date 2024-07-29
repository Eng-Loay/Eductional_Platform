import { useState } from "react";
import google from "../assets/icon_google.png";
import facebook from "../assets/icon_facebook.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      email,
      name,
      username,
      password,
      role,
    };

    try {
      const response = await fetch("https://localhost:7186/api/User/register", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("User registered successfully:", data);
      navigate("/form");
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <>
      <h2 className="text-blue-800 font-bold text-3xl mb-4 text-center">
        Student Signup
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3 py-2 rounded border shadow w-full focus:outline-none focus:shadow-outline"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 rounded border shadow w-full focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-2 rounded border shadow w-full focus:outline-none focus:shadow-outline"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 rounded border shadow w-full focus:outline-none focus:shadow-outline"
          />
          <input
            type="text"
            placeholder="Enter Your Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="px-3 py-2 rounded border shadow w-full focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
          >
            Create Account
          </button>
        </div>
      </form>
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      <div className="mt-2 text-center">
        <p className="text-grey-600">Or Sign in with</p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-white border border-grey-300 rounded py-2 px-4 flex items-center space-x-2 hover:bg-grey-100">
          <img src={google} alt="Google" className="w-4 h-4" />
          <span>Google</span>
        </button>
        <button className="bg-white border border-grey-300 rounded py-2 px-4 flex items-center space-x-2 hover:bg-grey-100">
          <img src={facebook} alt="Facebook" className="w-4 h-4" />
          <span>Facebook</span>
        </button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-grey-500">
          Already have an account?{" "}
          <Link to="/form" className="text-blue-500">
            Sign In Now
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignUp;
