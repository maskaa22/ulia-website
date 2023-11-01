import {applyMiddleware, combineReducers, createStore} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import userReducer from "./userReducer";


// const defaultState = {
//   isAuth: false,
//   currentUser: {}
// }

// function userReducer(state = defaultState, action) {
//   switch(action.type) {
    
//     default:
//       return state
//   }
// }




 const rootReducer = combineReducers({
    user: userReducer
});

export const  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));



// import {configureStore} from "@reduxjs/toolkit";
// import userReducer from "./userReducer";


// const rootReducer = combineReducers({
//     user: userReducer,
// });

// export const store = configureStore({
//   reducer: {
//     user: userReducer
//   }
// })