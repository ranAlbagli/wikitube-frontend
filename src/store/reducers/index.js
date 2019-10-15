import { combineReducers } from 'redux';
import youtubeReducer from './youtubeReducer'
import appReducer from './appReducer'


const combinedReducer = combineReducers({
    youtubeReducer,
    appReducer
    
  })
  
  export default combinedReducer