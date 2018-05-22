import { combineReducers } from 'redux';
import selBoardReducer from './selBoardReducer';
import getBoardListReducer from './getBoardListReducer';
import getBoardReducer from './getBoardReducer';
import LoginReducer from './LoginReducer';
import saveTokenReducer from './saveTokenReducer';


const rootReducer = combineReducers({
  selBoardReducer: selBoardReducer,
  getBoardListReducer: getBoardListReducer,
  getBoardReducer: getBoardReducer,
  LoginReducer: LoginReducer,
  saveTokenReducer: saveTokenReducer,
});

export default rootReducer;