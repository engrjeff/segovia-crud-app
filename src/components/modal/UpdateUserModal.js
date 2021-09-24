import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useUsers } from "../../context/UserContext";

import Input from "../Input";
import Modal from "./Modal";

function UpdateUserModal({ onClose }) {
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState({
    id: null,
    email: "",
    first_name: "",
    last_name: "",
  });

  const { id } = useParams();
  const history = useHistory();
  const { users, updateUser } = useUsers();

  useEffect(() => {
    const userId = id;
    const currentUser = users.find((u) => u.id.toString() === userId);
    if (!currentUser) return;
    setSelectedUser(currentUser);
  }, [id, users]);

  function handleChange(e) {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (
      !selectedUser.email ||
      !selectedUser.first_name ||
      !selectedUser.last_name
    ) {
      setError("Please fill up all fields.");
      setTimeout(() => setError(null), 2000);
      return;
    }
    // api call
    updateUser(selectedUser);
    history.push("/users");
  }

  function handleClose() {
    setSelectedUser({ id: null, email: "", first_name: "", last_name: "" });
    onClose();
  }

  return (
    <Modal
      show={true}
      title='Edit User'
      okText='Update'
      onOk={handleSubmit}
      onClose={handleClose}
      onCancel={handleClose}
      okBtnColor='info'
    >
      <Input
        name='email'
        label='Email Address'
        type='email'
        placeholder='youremail@example.com'
        value={selectedUser.email}
        onChange={handleChange}
      />
      <Input
        name='first_name'
        label='First Name'
        placeholder='Enter your first name'
        value={selectedUser["first_name"]}
        onChange={handleChange}
      />
      <Input
        name='last_name'
        label='Last Name'
        placeholder='Enter your last name'
        value={selectedUser["last_name"]}
        onChange={handleChange}
      />
      {error && (
        <div className='alert alert-danger mb-0 mx-3 mt-3 p-2'>{error}</div>
      )}
    </Modal>
  );
}

export default UpdateUserModal;
