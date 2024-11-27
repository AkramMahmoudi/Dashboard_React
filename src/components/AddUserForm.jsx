import React, { useState } from "react";
const AddUserForm = ({ onSubmit, onClose }) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Modal */}
      <div
        style={{
          left: "45%", // Adjust this value for the left margin
          top: "50%",
          transform: "translateY(-50%)", // Center vertically
        }}
        className="absolute bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 w-full max-w-md"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="profile-picture"
              className="inline-block text-sm font-medium dark:text-white"
            >
              Profile Picture URL
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="profile_picture"
                value={formData.profile_picture}
                onChange={handleChange}
                className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter profile picture URL"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="inline-block text-sm font-medium dark:text-white"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter username"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="inline-block text-sm font-medium dark:text-white"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="inline-block text-sm font-medium dark:text-white"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter password"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="role"
              className="inline-block text-sm font-medium dark:text-white"
            >
              Role
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter role"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone-number"
              className="inline-block text-sm font-medium dark:text-white"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="py-2 px-3 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div className="mt-5 flex justify-end gap-x-2">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
