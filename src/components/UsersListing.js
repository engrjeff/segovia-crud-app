import React, { Fragment, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useUsers } from "../context/UserContext";

import imgPlaceholder from "../images/imgplaceholder.jpg";
import Table from "./table";
import Pagination from "./Pagination";

function UsersTable() {
  const { users } = useUsers();
  const { url } = useRouteMatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  // table columns
  const columns = [
    { label: "ID", property: "id" },
    {
      label: "Avatar",
      key: "user_avatar",
      content: (item) => (
        <Link to={`/user/${item.id}`}>
          <img
            src={item.avatar || imgPlaceholder}
            alt={item.first_name}
            className='user-avatar rounded-circle'
          />
        </Link>
      ),
    },
    { label: "Email", property: "email" },
    { label: "First Name", property: "first_name" },
    { label: "Last Name", property: "last_name" },
    {
      key: "actions",
      content: (item) => (
        <Fragment>
          <Link
            type='button'
            className='btn btn-sm btn-info'
            to={`${url}/${item.id}/edit`}
          >
            Update
          </Link>
          <Link
            type='button'
            className='btn btn-sm btn-danger'
            to={`${url}/${item.id}/delete`}
          >
            Delete
          </Link>
        </Fragment>
      ),
    },
  ];

  // Get users to display
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const usersToDisplay = users.slice(firstUserIndex, lastUserIndex);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <Fragment>
      <Table columns={columns} data={usersToDisplay} />
      <div className='d-flex align-items-center'>
        <Pagination
          currentPage={currentPage}
          perPage={usersPerPage}
          total={users.length}
          paginate={paginate}
        />
        <small
          style={{ fontSize: "11px", marginLeft: "auto", marginTop: "4px" }}
        >
          Note to the checker: Create more users to see pagination. -jep
        </small>
      </div>
    </Fragment>
  );
}

export default UsersTable;
