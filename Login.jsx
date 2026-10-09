
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  // Handle email input
  const loginChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // Handle login
  const submitButton = async (e) => {
    e.preventDefault();
    if (!form.email) {
      alert("Please enter your email.");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:3001/login",
        form,
        {
          withCredentials: true,
        }
      );
      if (res.data.message) {
        navigate("/Dashbord");
      }
      // Clear form
      setForm({
        email: "",
      });
    } catch (error) {
      console.error(error);
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server is not running!");
      }
    }
  };
  return (
    <div className="bg-blue-500 min-h-screen flex justify-center items-center">
      <form
        onSubmit={submitButton}
        className="bg-white flex flex-col gap-4 m-auto p-10 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center">
          Login
        </h1>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={loginChange}
          className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={loginChange}
          className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500" />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Login
        </button>
        <p className="text-gray-600 text-center">
          Don't have an account?
        </p>
        <button
          type="button" onClick={() => navigate("/Signup")} className="text-blue-600 hover:text-blue-800 hover:underline">
          Create Account
        </button>
      </form>
    </div>

  );
}
export default Login;

