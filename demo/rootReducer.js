import { combineReducers } from 'react-reducer-store';
import todoReducer from './todoReducer';
import randomReducer from './randomReducer';

export default combineReducers({
    todo: todoReducer,
    random: randomReducer
});