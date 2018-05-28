import { combineReducers } from 'redux';
import selBoardReducer from './selBoardReducer';
import BoardListReducer from './BoardListReducer';
import getBoardReducer from './getBoardReducer';
import LoginReducer from './LoginReducer';
import saveTokenReducer from './saveTokenReducer';


const rootReducer = combineReducers({
  selBoardReducer: selBoardReducer,
  BoardListReducer: BoardListReducer,
  getBoardReducer: getBoardReducer,
  LoginReducer: LoginReducer,
  saveTokenReducer: saveTokenReducer,
});

export default rootReducer;