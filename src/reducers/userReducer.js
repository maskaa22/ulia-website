
const defaultState = {
  isAuth: false,
  currentUser: {}
}

export default  function userReducer(state = defaultState, action) {
  switch(action.type) {
    
    default:
      return state
  }
}

console.log(2222)
















// import { createAction, createReducer } from "@reduxjs/toolkit";

// const initialState = {
//   isAuth: false
// }

// export const loginFlag = createAction('LOGIN')

// export default createReducer(initialState, {
//   [loginFlag]: function(state) {
//     state.isAuth = true;
//   }
// })

// console.log(loginFlag)