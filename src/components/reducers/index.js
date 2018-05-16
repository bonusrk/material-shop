import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import clothes from './clothes'
import categories from './categories';
import clothesInCategory from './clothesInCategory';

export default combineReducers({
    routing: routerReducer,
    clothes,
    categories,
    clothesInCategory
});
