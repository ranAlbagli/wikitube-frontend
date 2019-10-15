import types from "../types";

export default function 
    contactsReducer(state = {videos:[] ,currVideo:null,term:null}, action) {      
    switch (action.type) {
        case types.FETCH_VIDEOS:
        return {...state , videos: action.data}; 
        case types.FETCH_VIDEO:          
        return {...state , currVideo: action.data}; 
        case types.SET_TERM:          
        return {...state , term: action.data}; 
      default:
        return state;
    }
  }