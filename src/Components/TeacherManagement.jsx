// src/components/TeacherManagement.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import TeacherRegistration from "./TeacherRegistration";
import TeacherForm from "./TeacherForm";
import TeacherList from "./TeacherList";

const TeacherManagement = () => {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [step, setStep] = useState(1);
  const [registeredUsername, setRegisteredUsername] = useState("");

  const fetchTeachers = async () => {
    const response = await axios.get("https://localhost:7186/api/Teachers");
    setTeachers(response.data);
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleNext = (username) => {
    setRegisteredUsername(username);
    setStep(2);
  };

  const handleSave = () => {
    fetchTeachers();
    setSelectedTeacher(null);
    setStep(1);
    setRegisteredUsername("");
  };

  const handleEdit = (teacher) => {
    setSelectedTeacher(teacher);
    setStep(2);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://localhost:7186/api/Teachers/${id}`);
    fetchTeachers();
  };

  const handleCancel = () => {
    setSelectedTeacher(null);
    setStep(1);
    setRegisteredUsername("");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-center text-3xl font-bold text-indigo-700 mb-6">
        Teacher Management
      </h1>
      {step === 1 && <TeacherRegistration onNext={handleNext} />}
      {step === 2 && (
        <TeacherForm
          teacher={selectedTeacher}
          onSave={handleSave}
          onCancel={handleCancel}
          username={registeredUsername}
        />
      )}
      <TeacherList
        teachers={teachers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default TeacherManagement;
