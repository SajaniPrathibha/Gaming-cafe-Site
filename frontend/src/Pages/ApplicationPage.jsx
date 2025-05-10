import React, { useState } from "react";
import Pc from "../Components/Pc";
import { Link } from 'react-router-dom';

const ApplicationPage = () => {
  const [btnHover, setBtnHover] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    tournamentType: "",
    category: "",
    teamName: "",
    captain: "",
    members: [""],
  });

  const [memberLimit, setMemberLimit] = useState({ min: 2, max: 3 });
  const [submitted, setSubmitted] = useState(false);
  const [regNumber, setRegNumber] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category" && value === "solo") {
      setFormData((prev) => ({
        ...prev,
        category: value,
        teamName: "",
        captain: "",
        members: [""],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  

  const handleMemberChange = (index, value) => {
    const updatedMembers = [...formData.members];
    updatedMembers[index] = value;
    setFormData({ ...formData, members: updatedMembers });
  };

  const addMember = () => {
    if (formData.members.length < memberLimit.max) {
      setFormData({ ...formData, members: [...formData.members, ""] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real use case: send form data to server here
    const regNum = Math.floor(100000 + Math.random() * 900000); // 6-digit random number
    setRegNumber(regNum);
    setSubmitted(true);
    // Reset form
    setFormData({
      name: "",
      age: "",
      tournamentType: "",
      category: "",
      teamName: "",
      captain: "",
      members: [""],
    });
  };

  return (
    <div className="bg-black min-h-screen">
      <section className="flex flex-col text-white md:flex-row justify-between items-center px-6 md:px-24 py-16 gap-20">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-6 text-center">Tournament Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400" />
            <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400" />
            <input type="text" name="tournamentType" value={formData.tournamentType} onChange={handleChange} placeholder="Tournament Type" required className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400" />

            <select name="category" value={formData.category} onChange={handleChange} required className="w-full p-2 rounded bg-gray-800 text-white">
              <option value="">Select Category</option>
              <option value="solo">Solo</option>
              <option value="team">Team</option>
            </select>

            {formData.category === "team" && (
              <>
                <select
                  name="teamSize"
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "2-3") setMemberLimit({ min: 2, max: 3 });
                    if (val === "2-5") setMemberLimit({ min: 2, max: 5 });
                    if (val === "2-10") setMemberLimit({ min: 2, max: 10 });
                  }}
                  required
                  className="w-full p-2 rounded bg-gray-800 text-white"
                >
                  <option value="">Select Team Size</option>
                  <option value="2-3">Team (2–3)</option>
                  <option value="2-5">Team (2–5)</option>
                  <option value="2-10">Team (2–10)</option>
                </select>

                <input type="text" name="teamName" value={formData.teamName} onChange={handleChange} placeholder="Team Name" required className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400" />
                <input type="text" name="captain" value={formData.captain} onChange={handleChange} placeholder="Captain Name" required className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400" />

                <p className="text-sm text-gray-300">
                  Members: {memberLimit.min} to {memberLimit.max}
                </p>
              </>
            )}


            <button type="submit"
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              style={{
                backgroundColor: btnHover ? '#1aeeef' : 'transparent',
                color: btnHover ? '#050e2d' : '#fff',
                border: '1px solid #1aeeef',
              }}
              className="text-sm font-bold  px-3 py-1 rounded transition-all duration-200"
            >
              Submit
            </button>
          </form>

          {submitted && (
            <div className="mt-6 bg-green-800 text-white p-4 rounded">
              Information sent! Your registration number is: <strong>{regNumber}</strong> go to your
              profile page to see aditional information about the tournament
            </div>
          )}
        </div>
        <div className="md:w-1/2">
          <nav className="absolute top-0 left-0 w-full flex justify-end items-center p-5 md:px-20">
            <ul className="flex gap-6">
              <li>
                <Link
                  to="/"
                  className="text-white text-sm md:text-base px-4 py-2 rounded hover:bg-[#1aeeef] hover:text-[#050e2d] transition shadow-md"
                >
                  Back to Home
                </Link>
              </li>
            </ul>
          </nav>
          <Pc/>
        </div>
      </section>
    </div>
  );
};

export default ApplicationPage