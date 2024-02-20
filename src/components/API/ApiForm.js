import React, { useState, useEffect } from 'react';
import InputForm from '../InputForm';
import UserList from '../UserList';
import UserDetail from '../UserDetail';
import UserEdit from '../UserEdit';

function ApiForm() {
    const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await fetch('http://spacetourism.test/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  // Create a new user
  const addUser = async (userData) => {
    try {
      const response = await fetch('http://spacetourism.test/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      setUsers([...users, data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Update an existing user
  const updateUser = async (userData) => {
    try {
      const response = await fetch(`http://spacetourism.test/api/users/${userData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const updatedUser = await response.json();
      const updatedUsers = users.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
      setUsers(updatedUsers);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Delete a user
  const deleteUser = async (userId) => {
    try {
      await fetch(`http://spacetourism.test/api/users/${userId}`, {
        method: 'DELETE',
      });
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div>
      <h1>CRUD Application</h1>
      <InputForm addUser={addUser} updateUser={updateUser} initialData={{ id: '', name: '', email: '', password:'' }} />
      <UserList users={users} viewUser={setSelectedUser} editUser={setSelectedUser} deleteUser={deleteUser} />
      {selectedUser ? (
        <div>
          <UserDetail user={selectedUser} />
          <UserEdit user={selectedUser} updateUser={updateUser} />
        </div>
      ) : null}
    </div>
  );
}

export default ApiForm