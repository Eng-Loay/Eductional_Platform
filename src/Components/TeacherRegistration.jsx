/* eslint-disable react/prop-types */
// src/components/TeacherRegistration.js
import React, { useState } from "react";
import axios from "axios";

const TeacherRegistration = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationData = { ...formData, role: "Teacher" };
    try {
      await axios.post(
        "https://localhost:7186/api/User/register",
        registrationData
      );
      onNext(formData.username); // Pass the username to the next step
    } catch (error) {
      console.error("There was an error registering the user!", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md"
    >
      {Object.keys(formData).map((key) => (
        <div key={key} className="mb-4">
          <label
            htmlFor={key}
            className="block text-sm font-medium text-gray-700"
          >
            {key.replace("_", " ")}
          </label>
          <input
            type={key === "password" ? "password" : "text"}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            placeholder={key.replace("_", " ")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
      ))}
      <div className="flex justify-end">
        <button
          type="submit"
          className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default TeacherRegistration;
