import { useState } from "react";
import google from "../assets/icon_google.png";
import facebook from "../assets/icon_facebook.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      userName,
      password,
    };

    try {
      const response = await fetch("https://localhost:7186/api/User/login", {
        method: "POST",
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
      <h2 className="text-blue-800 font-bold text-3xl mb-4 text-center whitespace-nowrap">
        Student Login
      </h2>
      <p className="text-grey-600 mb-6 text-center">
        Hey enter your details to sign in to your account
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text "
            placeholder="Enter Your UserName"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-2 rounded border shadow w-full apperence-none focus:outline-none focus:shadow-outline leading-tight mb-4"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 rounded border shadow w-full apperence-none focus:outline-none focus:shadow-outline leading-tight mb-4"
          />
          <div>
            <p className="text-left mb-4">
              Having Trouble in{" "}
              <a href="" className="text-blue-500">
                Signin
              </a>
            </p>
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </div>
      </form>
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}

      <div className="mt-6 text-center">
        <p className="text-grey-600">Or Sign in with</p>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-white border border-grey-300 rounded py-2 px-4 flex items-center space-x-2 hover:bg-grey-100">
          <img src={google} alt="google" className="w-4 h-4" />
          <span className="m">Google</span>
        </button>
        <button className="bg-white border border-grey-300 rounded py-2 px-4 flex items-center space-x-2 hover:bg-grey-100">
          <img src={facebook} alt="facebook" className="w-2.5 h-4" />
          <span className="m">Facebook</span>
        </button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-grey-500">
          Don&apos;t have an account?{" "}
          <Link to="/form2" className="text-blue-500">
            Signup Now
          </Link>
        </p>
      </div>
    </>
  );
}
export default Signin;
