export const initialState = {
  toast: { shown: false, message: "" },
  isLoading: false,
  error: null,
  users: [],
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "CALL_API":
      return {
        ...state,
        isLoading: true,
      };
    case "CALL_API_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case "CALL_API_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case "MANAGE_TOAST":
      return {
        ...state,
        toast: action.payload,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload.data,
      };
    case "CREATE_USER":
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.payload.id ? action.payload : u
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((u) => u.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
