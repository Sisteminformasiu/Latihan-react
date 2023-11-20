import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl text-green-950 font-black mb-5">LOGIN</h1>
      <div className="w-96 h-80 flex flex-col gap-y-12 bg-gray-400 rounded-md shadow-md p-12">
        <input
          className="w-full h-10 shadow-md p-3 bg-white rounded-md"
          type="text"
          placeholder="Your username..."
        />
        <input
          className="w-full h-10 shadow-md p-3 bg-white rounded-md"
          type="password"
          placeholder="Your Password..."
        />
        <Button
          id="login"
          label="LOGIN"
          type="submit"
          onClick={() => navigate("/portalnews")}
        />
      </div>
    </div>
  );
}

export default Login;
