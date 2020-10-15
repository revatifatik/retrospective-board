import { combineReducers } from 'redux';
import retrospectiveReducer from "./retrospectiveReducer";

const reducerIndex = combineReducers({
    retrospectiveReducer: retrospectiveReducer
});

export default reducerIndex;