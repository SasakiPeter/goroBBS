import {combineReducers} from 'redux';
import selBoardReducer from './selBoardReducer';
import getBoardListReducer from './getBoardListReducer';
import getBoardReducer from './getBoardReducer';


const rootReducer=combineReducers({
  selBoardReducer:selBoardReducer,
  getBoardListReducer:getBoardListReducer,
  getBoardReducer:getBoardReducer
});

export default rootReducer;