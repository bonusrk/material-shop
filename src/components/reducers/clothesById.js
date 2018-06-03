import R from 'ramda';

import {
    FETCH_CLOTHE_BY_ID_SUCCESS,
    CHANGE_COLOR,
    CHANGE_SIZE
} from '../../actionTypes'

const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type){
        case FETCH_CLOTHE_BY_ID_SUCCESS:
            return payload;
        case CHANGE_COLOR:
            let newState = Object.assign({}, state)
            newState.color.map((color) => {
                if(color.id === payload) {
                    newState.currentColor = color
                }
            })
            return R.merge(state, newState);
        case CHANGE_SIZE:
            let newStateSize = Object.assign({}, state)
            newStateSize.size.map((size) => {
                if (size.id === payload) {
                    newStateSize.currentSize = size
                }
            })
            return R.merge(state, newStateSize);
        default:
            return state
    }
}



