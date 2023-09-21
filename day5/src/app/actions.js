// userActions.js

// Action type to set the user's username
export const SET_USER_NAME = 'SET_USER_NAME';

// Action creator to set the user's username
export const setUserName = (username) => {
  // Save the username to local storage
  localStorage.setItem('username', username);

  return {
    type: SET_USER_NAME,
    payload: username,
  };
};
