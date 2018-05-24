import R from 'ramda';

import {
    FETCH_CLOTHES_SUCCESS,
} from '../../actionTypes'

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_CLOTHES_SUCCESS:
            return R.merge(state, payload);
        default:
            return state
    }
}
