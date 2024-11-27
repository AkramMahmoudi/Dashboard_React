import React, { useState, useEffect } from "react";
// import CardHeader from "./Card";
import AddUserForm from "./AddUserForm";
import { addUser, fetchUsers, deleteUser } from "../api";
// import Modall from "./Modal";

const Content = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const itemsPerPage = 10;

  // Fetch users when the component mounts
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    loadUsers();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = users.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleAddUser = async (user) => {
    try {
      await addUser(user);
      // After adding the user, reload the users list
      const data = await fetchUsers();
      setUsers(data);
      setShowAddUserForm(false); // Close form after successful addition
    } catch (error) {
      console.error("Failed to add user:", error.message);
    }
  };

  const handleDeleteUser = async () => {
    try {
      await deleteUser(selectedUserId);
      setShowConfirmDialog(false);
      setShowSuccessDialog(true);
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.error("Failed to delete user:", error.message);
    }
  };
  const openConfirmDialog = (userId) => {
    // console.log("clicked");
    setSelectedUserId(userId);
    setShowConfirmDialog(true);
    console.log(showConfirmDialog);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users.</div>;
  }

  return (
    <>
      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 relative">
          {/* <CardHeader /> */}
          {/* Add User Button */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Users Table</h2>
            <button
              onClick={() => setShowAddUserForm((prev) => !prev)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              {showAddUserForm ? "Cancel" : "Add User"}
            </button>
          </div>
          {/* Add User Form */}
          {showAddUserForm && <AddUserForm onSubmit={handleAddUser} />}
          {/* table */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border rounded-lg shadow overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead className="bg-gray-50 dark:bg-neutral-700">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                        >
                          Profile Picture
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                        >
                          Username
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                      {currentData.map((user) => (
                        <tr key={user.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                            <img
                              className="inline-block size-8 rounded-full"
                              src={
                                user.profile_picture ||
                                "https://avatars.githubusercontent.com/u/88598653"
                              }
                              alt="Avatar"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {user.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {user.username}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {user.role}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                            {user.phone_number}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button
                              onClick={() => openConfirmDialog(user.id)}
                              className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <div className="mt-4 flex justify-between items-center">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md disabled:opacity-50"
            >
              Prev
            </button>
            <p>
              Page {currentPage} of {totalPages}
            </p>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
        {/* Confirmation Dialog */}
        {showConfirmDialog && (
          <div
            id="hs-confirmation-modal"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="hs-confirmation-modal-label"
          >
            <div
              className="absolute bg-white rounded-xl shadow-lg dark:bg-neutral-900 p-6"
              style={{
                left: "45%", // Adjust this value for the left margin
                top: "50%",
                transform: "translateY(-50%)", // Center vertically
              }}
            >
              <h2
                id="hs-confirmation-modal-label"
                className="text-xl font-semibold text-gray-800 dark:text-neutral-200 mb-4"
              >
                Confirm Deletion
              </h2>
              <p className="text-gray-500 dark:text-neutral-500 mb-4">
                Are you sure you want to delete this user?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowConfirmDialog(false)}
                  className="py-2 px-4 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteUser}
                  className="py-2 px-4 text-sm font-medium rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Dialog */}
        {showSuccessDialog && (
          <div
            id="successModal"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <div
              className="absolute bg-white rounded-xl shadow-lg p-6 dark:bg-neutral-900"
              style={{
                left: "50%", // Adjust this value for the left margin
                top: "50%",
                transform: "translateY(-50%)", // Center vertically
              }}
            >
              <p className="text-blue-600 decoration-2 font-medium dark:text-blue-500">
                User successfully Deleted!
              </p>
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => setShowSuccessDialog(false)}
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Content;
