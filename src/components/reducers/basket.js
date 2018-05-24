import R from 'ramda';

import {
    ADD_CLOTHE_TO_BASKET,
    REMOVE_CLOTHE_FROM_BASKET,
    CLEAR_BASKET,
    BASKET_ITEM_MINUS
} from '../../actionTypes'

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch (type){
        case ADD_CLOTHE_TO_BASKET:
            delete payload.count
            return R.append(payload, state)
        case REMOVE_CLOTHE_FROM_BASKET:
            let deleteState = state.slice()
            let deleteResult = []
            deleteState= deleteState.map((clothe) => {
                if( clothe.id !== payload.id ||
                    clothe.currentColor.id !== payload.currentColor.id ||
                    clothe.currentSize.id!==payload.currentSize.id){
                    console.log('deleteResult.push(clothe)');
                    deleteResult.push(clothe)
                }
            })
            console.log('deleteResult', deleteResult);
            return deleteResult
        case CLEAR_BASKET:
            return []
        case BASKET_ITEM_MINUS:
            let basket = state.slice()
            for(let i=basket.length - 1; i<basket.length; i--){
                const clothe = basket[i]

                if( clothe.id === payload.id &&
                    clothe.currentColor.id === payload.currentColor.id &&
                    clothe.currentSize.id===payload.currentSize.id){
                    basket.splice(i, 1)
                    break
                }
            }

            return basket
        default:
            return state
    }
}
