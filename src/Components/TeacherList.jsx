/* eslint-disable react/prop-types */
// src/components/TeacherList.js
import React, { useState } from "react";
import axios from "axios";
import Modal from "react-modal";

// Set the root element for the modal
Modal.setAppElement("#root");

const TeacherList = ({ teachers, onEdit, onDelete }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [teacherToDelete, setTeacherToDelete] = useState(null);

  const openModal = (teacher) => {
    setTeacherToDelete(teacher);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setTeacherToDelete(null);
    setModalIsOpen(false);
  };

  const handleDelete = async () => {
    if (teacherToDelete) {
      console.log(`https://localhost:7186/api/Teachers/${teacherToDelete.id}`);
      await axios.delete(
        `https://localhost:7186/api/Teachers/${teacherToDelete.id}`
      );
      onDelete();
      closeModal();
    }
  };

  return (
    <div>
      <ul className="space-y-4">
        {teachers.map((teacher) => (
          <li
            key={teacher.id}
            className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md"
          >
            <div>
              <p className="text-lg font-semibold">{teacher.name}</p>
              <p className="text-sm text-gray-600">{teacher.subject}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => onEdit(teacher)}
                className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => openModal(teacher)}
                className="py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Delete Confirmation"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
          <p>Are you sure you want to delete {teacherToDelete?.name}?</p>
          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={closeModal}
              className="py-2 px-4 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TeacherList;
