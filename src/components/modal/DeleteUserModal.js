import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useUsers } from "../../context/UserContext";

import imgPlaceholder from "../../images/imgplaceholder.jpg";
import Modal from "./Modal";

function DeleteUserModal({ onClose }) {
  const [selectedUser, setSelectedUser] = useState({
    id: null,
    avatar: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const { id } = useParams();
  const history = useHistory();
  const { users, deleteUser } = useUsers();

  useEffect(() => {
    const userId = id;
    const currentUser = users.find((u) => u.id.toString() === userId);
    if (!currentUser) return;
    setSelectedUser(currentUser);
  }, [id, users]);

  function handleSubmit() {
    // api call
    deleteUser(selectedUser.id);
    history.push("/users");
  }

  return (
    <Modal
      show={true}
      title='Delete User'
      okText='Delete'
      onOk={handleSubmit}
      onClose={onClose}
      onCancel={onClose}
      okBtnColor='danger'
    >
      <p className='fw-bold'>Are you sure you want to delete the ff. user?</p>
      <div className='d-flex align-items-center p-4'>
        <img
          className='rounded-circle delete-img'
          src={selectedUser.avatar || imgPlaceholder}
          alt={selectedUser.first_name}
        />
        <div className='px-4'>
          <h6 className='fw-bold text-info mb-0'>Id</h6>
          <p>{selectedUser.id}</p>
          <h6 className='fw-bold text-info mb-0'>Name</h6>
          <p>{selectedUser.first_name + " " + selectedUser.last_name}</p>
          <h6 className='fw-bold text-info mb-0'>E-mail</h6>
          <p className='mb-0'>{selectedUser.email}</p>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteUserModal;
