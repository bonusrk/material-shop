import R from 'ramda';

import {
    ADD_CLOTHE_TO_BASKET,
    REMOVE_CLOTHE_FROM_BASKET,
    CLEAR_BASKET
} from '../../actionTypes'

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type){
        case ADD_CLOTHE_TO_BASKET:
            return R.append(payload, state)
        case REMOVE_CLOTHE_FROM_BASKET:
            return R.without(R.of(payload), state)
        case CLEAR_BASKET:
            return []
        default:
            return state
    }
}
