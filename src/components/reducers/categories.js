import R from 'ramda';

import {
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_START
} from '../../actionTypes'

const initialState = {
    fetch: false,
    data: null,
    error: null,
}

export default (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_CATEGORIES_START:
            return {...state, fetch: true}
        case FETCH_CATEGORIES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload);
            return {...state, fetch: false, data: newValues, error: null}
        default:
            return state
    }
}
