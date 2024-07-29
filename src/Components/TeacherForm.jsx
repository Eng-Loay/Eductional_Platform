/* eslint-disable react/prop-types */
// src/components/TeacherForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const TeacherForm = ({ teacher, onSave, onCancel, username }) => {
  const [formData, setFormData] = useState({
    iD_Number: "",
    subject: "",
    bio: "",
    payment_Method: "",
    students_No: 0,
    name: "",
    email: "",
    username: username || "",
    role: "Teacher",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (teacher) {
      setFormData({
        iD_Number: teacher.iD_Number || "",
        subject: teacher.subject || "",
        bio: teacher.bio || "",
        payment_Method: teacher.payment_Method || "",
        students_No: teacher.students_No || 0,
        name: teacher.name || "",
        email: teacher.email || "",
        username: teacher.username || username || "",
        role: teacher.role || "Teacher",
      });
    } else {
      setFormData({
        iD_Number: "",
        subject: "",
        bio: "",
        payment_Method: "",
        students_No: 0,
        name: "",
        email: "",
        username: username || "",
        role: "Teacher",
      });
    }
  }, [teacher, username]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (teacher) {
      await axios.put(
        `https://localhost:7186/api/Teachers/${teacher.id}`,
        formData
      );
    } else {
      await axios.post("https://localhost:7186/api/Teachers", formData);
    }
    onSave();
  };

  const handleCancel = () => {
    setIsModalOpen(true);
  };

  const confirmCancel = () => {
    setIsModalOpen(false);
    onCancel();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md"
      >
        {Object.keys(formData).map(
          (key) =>
            (!teacher || key !== "iD_Number") && (
              <div key={key} className="mb-4">
                <label
                  htmlFor={key}
                  className="block text-sm font-medium text-gray-700"
                >
                  {key.replace("_", " ")}
                </label>
                <input
                  type={key === "students_No" ? "number" : "text"}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  placeholder={key.replace("_", " ")}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                  disabled={key === "role" || (teacher && key === "username")}
                />
              </div>
            )
        )}
        <div className="flex justify-between">
          <button
            type="submit"
            className="py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
          >
            {teacher ? "Update" : "Add"} Teacher
          </button>
          {teacher && (
            <button
              type="button"
              onClick={handleCancel}
              className="py-2 px-4 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-50 fixed inset-0" />
          <div className="bg-white rounded-lg p-6 z-10">
            <h2 className="text-xl font-semibold mb-4">Confirm Cancel</h2>
            <p className="mb-4">Are you sure you want to cancel?</p>
            <div className="flex justify-end">
              <button
                onClick={confirmCancel}
                className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 mr-2"
              >
                Yes, Cancel
              </button>
              <button
                onClick={closeModal}
                className="py-2 px-4 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600"
              >
                No, Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeacherForm;
