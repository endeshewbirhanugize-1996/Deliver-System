import React, { useState } from "react";
import axios from "axios";
const Sinupfoood = () => {
  const [form, setForm] = useState({
    name: "",
    cost: "",
    type: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "file") {
      setForm((f) => ({
        ...f,
        file: files[0] || null,
      }));
    } else {
      setForm((f) => ({
        ...f,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("cost", form.cost);
      formData.append("type", form.type);
      if (form.file) {
        formData.append("file", form.file);
      }
      const res = await axios.post("http://localhost:3001/adminregistor", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Food registered successfully!");
      console.log(res.data);
      setForm({
        name: "",
        cost: "",
        type: "",
        file: null,
      });
    } catch (error) {
      console.error(error);
      setMessage("Error occurred while registering food.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-red-100 flex flex-col md:flex-row">
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-red-600 to-red-800 p-10 text-white flex-col justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-100">EthioDelivery</p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight">
              Add new food item
            </h1>
          </div>
          <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-sm uppercase tracking-[0.25em] text-red-100">Admin panel</p>
            <p className="mt-3 text-lg text-red-50">
              Upload the product image and add item details to keep your menu up to date.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="mb-8 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Register food</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900">Create a menu item</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
                Food Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter food name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label htmlFor="cost" className="mb-2 block text-sm font-semibold text-gray-700">
                Cost
              </label>
              <input
                id="cost"
                type="number"
                name="cost"
                value={form.cost}
                onChange={handleChange}
                placeholder="Enter price"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label htmlFor="foodtype" className="mb-2 block text-sm font-semibold text-gray-700">
                Food Type
              </label>
              <input
                id="type"
                type="text"
                name="type"
                value={form.type}
                onChange={handleChange}
                placeholder="Example: Breakfast, Pizza, Desserts"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div>
              <label htmlFor="file" className="mb-2 block text-sm font-semibold text-gray-700">
                Food Image
              </label>
              <input
                id="file"
                type="file"
                name="file"
                accept="image/*"
                onChange={handleChange}
                className="w-full rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-3 text-gray-600 file:mr-4 file:rounded-full file:border-0 file:bg-red-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
              />
            </div>
            {message && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {message}
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-red-600 px-4 py-3.5 text-base font-bold text-white shadow-lg shadow-red-200 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-400"
            >
              {loading ? "Registering..." : "Register Food"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Sinupfoood;

