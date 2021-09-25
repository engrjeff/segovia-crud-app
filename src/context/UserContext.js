/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useReducer } from "react";
import userReducer, { initialState } from "./userReducer";

const apiEndpoint = "https://reqres.in/api/users";

const UserContext = React.createContext();
UserContext.displayName = "UserContext";

export const useUsers = () => useContext(UserContext);

function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { users, isLoading, toast, error } = state;

  const executeFetch = async (url, options, actionType) => {
    dispatch({
      type: "CALL_API",
    });
    try {
      const res = await fetch(url, options);
      const json = await res.json();

      dispatch({
        type: "CALL_API_SUCCESS",
      });

      dispatch({
        type: actionType,
        payload: json,
      });
    } catch (err) {
      dispatch({
        type: "CALL_API_SUCCESS",
        payload: err,
      });
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // For showing/hiding toast
  function manageToast(message) {
    dispatch({ type: "MANAGE_TOAST", payload: { shown: true, message } });

    setTimeout(() => {
      dispatch({
        type: "MANAGE_TOAST",
        payload: { shown: false, message: "" },
      });
    }, 3000);
  }

  // Get Users
  function getUsers() {
    executeFetch(`${apiEndpoint}?page=1`, {}, "GET_USERS");
  }

  // Create User
  function createUser(newUser) {
    const options = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    };

    executeFetch(apiEndpoint, options, "CREATE_USER");

    // show toast
    manageToast("User was created successfully!");
  }

  // Update User
  function updateUser(updatedUser) {
    const url = `${apiEndpoint}/${updatedUser.id}`;
    const options = {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    };

    executeFetch(url, options, "UPDATE_USER");

    // show toast
    manageToast("User was updated successfully!");
  }

  // Delete User
  function deleteUser(id) {
    const url = `${apiEndpoint}/${id}`;
    const options = {
      method: "DELETE",
    };

    executeFetch(url, options);

    dispatch({
      type: "DELETE_USER",
      payload: id,
    });

    // show toast
    manageToast("User was deleted successfully!");
  }

  const value = {
    users,
    error,
    toast,
    isLoading,
    createUser,
    updateUser,
    deleteUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
