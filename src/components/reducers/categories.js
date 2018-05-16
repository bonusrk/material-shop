import R from 'ramda';

import {
    FETCH_CATEGORIES_SUCCESS,
} from '../../actionTypes'

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_CATEGORIES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload);
            console.log('merge', R.merge(state, newValues));
            return R.merge(state, newValues);
        default:
            return state
    }
}
