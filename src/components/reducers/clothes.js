import R from 'ramda';

import {
    FETCH_CLOTHES_SUCCESS,
    FETCH_CLOTHES_START
} from '../../actionTypes'

const initialState = {
    fetch: false,
    data: null,
    error: null,
}

export default (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_CLOTHES_START:
            return {...state, fetch: true}
        case FETCH_CLOTHES_SUCCESS:
            return {...state, fetch: false, data: payload, error: null}
        default:
            return state
    }
}
