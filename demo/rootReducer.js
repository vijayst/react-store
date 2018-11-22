import { combineReducers } from 'react-reducer-store';
import todoReducer from './todoReducer';

export default combineReducers({
    todo: todoReducer
});