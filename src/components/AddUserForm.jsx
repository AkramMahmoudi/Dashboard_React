import React, { useState } from "react";
const AddUserForm = ({ onSubmit }) => {
  
  const [formData, setFormData] = useState({
    profile_picture: "",
    username: "",
    password: "",
    email: "",
    role: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Call the onSubmit function passed as a prop
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Profile Picture URL:</label>
        <input
          type="text"
          name="profile_picture"
          value={formData.profile_picture}
          onChange={handleChange}
          className="block w-full border rounded-md px-2 py-1"
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="block w-full border rounded-md px-2 py-1"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full border rounded-md px-2 py-1"
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="block w-full border rounded-md px-2 py-1"
        />
      </div>
      <div>
        <label>Role:</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="block w-full border rounded-md px-2 py-1"
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          className="block w-full border rounded-md px-2 py-1"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-green-600 text-white rounded-md"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
