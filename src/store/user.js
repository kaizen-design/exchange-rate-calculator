const initialState = {
  name: "Denis Bondarchuk",
  loggedIn: false
}

export default function userReducer(state = initialState, action) {
  return state;
}

//  Selectors
export const getName = (state) => state.user.name;