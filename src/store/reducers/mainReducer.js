import {combineReducers} from 'redux';
//import {routerReducer} from 'react-router-redux';
import firstReducer from './firstReducer';
import secondReducer from './secondReducer';

const mainReducer = combineReducers({
    firstReducer,
    secondReducer
});

export default mainReducer;