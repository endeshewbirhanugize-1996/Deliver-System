
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Sinup = () => {
  const [count, setCount]=useState({
    name: "",
    password: "",
    phone: "",
    email: "",
  });
  const navigate =useNavigate();
  // Handle input changes
  const up=(event)=>{
    const { name, value }=event.target;
    setCount((prev)=>({
      ...prev,
      [name]: value,
    }));
  };
  // Handle form submission
  const onsub =async(event)=>{
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/signup",
        count
      );
      console.log(res.data);
      // Signup successful → go to Login
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen bg-blue-400 flex justify-center items-center">
      <form
        onSubmit={onsub}
        className="bg-white p-8 rounded-xl shadow-lg w-96 flex flex-col gap-4" >
        <h1 className="text-2xl font-bold text-center">
          Signup
        </h1>
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={count.name}
          onChange={up}
          className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={count.password}
          onChange={up}
          className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone"
          value={count.phone}
          onChange={up}
          className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={count.email}
          onChange={up}
          className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Submit
        </button>
        {/* Login */}
        <p onClick={() => navigate("/")}
          className="text-center text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"  >
          Already have an account? Login
        </p>
      </form>
    </div>
  );
};
export default Sinup;

