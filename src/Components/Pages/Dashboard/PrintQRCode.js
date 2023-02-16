import React, { useState } from "react";
import QrCode from "qrcode.react";

const PrintQRCode = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  // Function to generate unique ID for each user
  const generateId = () => {
    const maxId = users.length > 0 ? Math.max(...users.map((u) => u.id)) : 0;
    return maxId + 1;
  };

  // Function to add new user profile
  const handleAddUser = (event) => {
    event.preventDefault();
    const user = {
      id: generateId(),
      name: newUser,
    };
    setUsers(users.concat(user));
    setNewUser("");
  };

  return (
    <div>
      <h1>User Profile Generator</h1>
      <form onSubmit={handleAddUser}>
        <div>
          Name:
          <input
            value={newUser}
            onChange={(event) => setNewUser(event.target.value)}
          />
        </div>
        <button type="submit">Add User</button>
      </form>
      <hr />
      <h2>User Profiles</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <QrCode value={`https://example.com/profile/${user.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintQRCode;
