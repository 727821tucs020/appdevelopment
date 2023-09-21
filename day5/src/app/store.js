import { createStore, combineReducers } from 'redux';
import userReducer from "../app/reducer";
import { setUserName } from "../app/actions"; // Import your setUserName action

// Check if the username exists in localStorage
const storedUsername = localStorage.getItem('username');

// Define your initial state
const initialState = {
  user: {
    username: storedUsername || '', // Use the stored username if it exists, otherwise an empty string
  },
};

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, initialState);

// Optionally, you can dispatch setUserName here to initialize the state with the username if it exists
if (storedUsername) {
  store.dispatch(setUserName(storedUsername));
}

export default store;