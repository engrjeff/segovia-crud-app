import React, { Fragment } from "react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

import CreateUserModal from "../components/modal/CreateUserModal";
import UpdateUserModal from "../components/modal/UpdateUserModal";
import DeleteUserModal from "../components/modal/DeleteUserModal";
import UsersListing from "../components/UsersListing";
import { useUsers } from "../context/UserContext";

function Users(props) {
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const { users } = useUsers();

  function handleClose() {
    history.push("/users");
  }

  return (
    <Fragment>
      <Switch>
        <Route path={`${path}/create`}>
          <CreateUserModal onClose={handleClose} />
        </Route>
        <Route path={`${path}/:id/edit`}>
          <UpdateUserModal onClose={handleClose} />
        </Route>
        <Route path={`${path}/:id/delete`}>
          <DeleteUserModal onClose={handleClose} />
        </Route>
      </Switch>
      <div className='users-heading'>
        <div>
          <h3 className='mb-0'>Users</h3>
          <p className='mb-0'>{users.length} Rows</p>
        </div>
        <Link
          type='button'
          className='btn btn-sm btn-success'
          to={`${url}/create`}
        >
          + Add User
        </Link>
      </div>
      <hr />
      <UsersListing />
    </Fragment>
  );
}

export default Users;
