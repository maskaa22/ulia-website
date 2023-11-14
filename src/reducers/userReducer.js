
const defaultState = {
  isAuth: false,
  currentUser: {}
}

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        isAuth: true,
        currentUser: action.payload
      }
      case 'DEL_USER':
      return {
        ...state,
        isAuth: false,
        currentUser: {}
      }

    default:
      return state
  }
}


export const setUser = user => ({ type: 'SET_USER', payload: user })
export const delUser = () => ({ type: 'DEL_USER'})















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