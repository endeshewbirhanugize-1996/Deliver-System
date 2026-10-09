import { useState } from "react";
import axios from "axios";
const Dashboard = () => {
  const [form, setForm] = useState({
    filename: "",
    file: null,
    number: "",
  });
  const handleChange = (event) => {
    const { name, value, files}=event.target;
    if (name === "file"){
      setForm((prev) => ({
        ...prev,
        file: files[0],
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData();
      data.append("filename", form.filename);
      data.append("number", form.number);
      data.append("file", form.file);
      const res = await axios.post(
        "http://localhost:3001/upload",
        data
      );
      console.log(res.data);
      // Clear form
      setForm({
        filename: "",
        file: null,
        number: "",
      });

    } catch (error) {
      console.log("Upload error:", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-96 flex flex-col gap-4" >
        <h1 className="text-2xl font-bold text-center">
          Dashboard
        </h1>
        {/* File */}
        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg"
          required
        />
        {/* Filename */}
        <input
          type="text"
          name="filename"
          placeholder="Enter your filename"
          value={form.filename}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        {/* Money */}
        <input
          type="number"
          name="number"
          placeholder="Enter money"
          value={form.number}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
       <textarea
    rows="4"
    placeholder="Type your message here…"
    className="w-full px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm
           outline-none transition-all duration-200
           focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:ring-opacity-50
           hover:border-gray-400
           disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-60
           h-32 resize-none overflow-y-auto"
></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700" >
          Upload
        </button>
      </form>
    </div>
  );
};
export default Dashboard;

