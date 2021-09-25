import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useUsers } from "../context/UserContext";
import imgPlaceholder from "../images/imgplaceholder.jpg";

function UserDetails() {
  const [selectedUser, setSelectedUser] = useState({
    id: null,
    avatar: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const { id } = useParams();
  const { users } = useUsers();

  useEffect(() => {
    const userId = id;
    const currentUser = users.find((u) => u.id.toString() === userId);
    if (!currentUser) return;
    setSelectedUser(currentUser);
  }, [id, users]);

  return (
    <div className='profile-container d-flex align-items-center'>
      <img
        className='rounded-circle h-50'
        src={selectedUser.avatar || imgPlaceholder}
        alt={selectedUser.first_name}
      />
      <div className='profile-container-details'>
        <h1>{selectedUser.first_name + " " + selectedUser.last_name}</h1>
        <div className='profile-container-email my-4'>
          <p className='mb-0'>Email</p>
          <p className='text-info fw-bold'>{selectedUser.email}</p>
        </div>
        <Link to='/users' className='btn btn-primary btn-sm'>
          Back to Users List
        </Link>
      </div>
    </div>
  );
}

export default UserDetails;
