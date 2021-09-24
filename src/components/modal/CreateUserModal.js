import React, { useState } from "react";
import { useHistory } from "react-router";
import { useUsers } from "../../context/UserContext";

import Input from "../Input";
import Modal from "./Modal";

function CreateUserModal({ onClose }) {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    email: "",
    first_name: "",
    last_name: "",
  });

  const { createUser } = useUsers();
  const history = useHistory();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    if (!user.email || !user.first_name || !user.last_name) {
      setError("Please fill up all fields.");
      setTimeout(() => setError(null), 2000);
      return;
    }

    const newUser = {
      ...user,
    };

    // api call
    createUser(newUser);

    history.push("/users");
  }

  return (
    <Modal
      show={true}
      title='Create User'
      okText='Create'
      onOk={handleSubmit}
      onClose={onClose}
      onCancel={onClose}
      okBtnColor='success'
    >
      <p className='mb-2 px-3 fw-bold'>Please fill up the form below.</p>
      <Input
        name='email'
        label='Email Address'
        type='email'
        placeholder='youremail@example.com'
        value={user.email}
        onChange={handleChange}
      />
      <Input
        name='first_name'
        label='First Name'
        placeholder='Enter your first name'
        value={user.first_name}
        onChange={handleChange}
      />
      <Input
        name='last_name'
        label='Last Name'
        placeholder='Enter your last name'
        value={user.last_name}
        onChange={handleChange}
      />
      {error && (
        <div className='alert alert-danger mb-0 mx-3 mt-3 p-2'>{error}</div>
      )}
    </Modal>
  );
}

export default CreateUserModal;
