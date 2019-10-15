import types from "../types";
import AuthService from '../../services/AuthService'


export default function 
    contactsReducer(state = {theme:{},loggedinUser:AuthService.getLoggedInUser(),users:[] },action) {      
    switch (action.type) {
        case types.SET_THEME:          
        return {...state , theme: action.data}; 
        case types.SET_LOGGEDIN_USER:          
        return {...state , loggedinUser: action.data}; 
      default:
        return state;
    }
  }