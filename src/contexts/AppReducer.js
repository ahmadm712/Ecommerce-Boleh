export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "EDIT_USER":
      const updatedUser = action.payload;

      const updatedUsers = state.users.map((user) => {
        if (user.user_id === updatedUser.user_id) {
          return updatedUser;
        }
        return user;
      });

      return {
        ...state,
        users: updatedUsers,
      };

    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter(
          (user) => user.user_id !== action.payload
        ),
      };

    default:
      return state;
  }
};