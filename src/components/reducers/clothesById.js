import R from 'ramda';

import {
    FETCH_CLOTHE_BY_ID_SUCCESS,
    FETCH_CLOTHE_BY_ID_START,
    CHANGE_COLOR,
    CHANGE_SIZE
} from '../../actionTypes'

const initialState = {
    fetch: false,
    data: null,
    error: null,
}

export default (state = initialState, {type, payload, id}) => {
    switch (type){
        case FETCH_CLOTHE_BY_ID_START:
            return {...state, fetch: true}
        case FETCH_CLOTHE_BY_ID_SUCCESS:
            console.log('payload', payload);
            return {...state, fetch: false, data:R.find(R.propEq('id', id), payload)}
        case CHANGE_COLOR:
            let newState = Object.assign({}, state)
            newState.data.color.map((color) => {
                if(color.id === payload) {
                    newState.data.currentColor = color
                }
            })
            return R.merge(state, newState);
        case CHANGE_SIZE:
            let newStateSize = Object.assign({}, state)
            newStateSize.data.size.map((size) => {
                if (size.id === payload) {
                    newStateSize.data.currentSize = size
                }
            })
            return R.merge(state, newStateSize);
        default:
            return state
    }
}



