// Fetch users function
const fetchUsers = async () => {
  const response = await fetch("http://localhost:4500/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

// Add user function
const addUser = async (user) => {
  const response = await fetch("http://localhost:4500/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to add user");
  }
  return response.json();
};
// Delete user function
const deleteUser = async (id) => {
  const response = await fetch(`http://localhost:4500/user/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete user");
  }
  return response.json();
};

export { fetchUsers, addUser, deleteUser };






