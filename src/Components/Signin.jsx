import { useState } from "react";
import google from "../assets/icon_google.png";
import facebook from "../assets/icon_facebook.png";
function Signin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h2 className="text-blue-800 font-bold text-3xl mb-4 text-center whitespace-nowrap">
        Student Login
      </h2>
      <p className="text-grey-600 mb-6 text-center">
        Hey enter your details to sign in to your account
      </p>
      <form className="space-y-4">
        <div className="relative">
          <input
            type="email "
            placeholder="Enter Your Email"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <a href="" className="text-blue-500">
            Signup Now
          </a>
        </p>
      </div>
    </>
  );
}
export default Signin;
