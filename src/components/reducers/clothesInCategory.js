import R from 'ramda';

import {
    FETCH_CLOTHES_IN_CATEGORIES_SUCCESS,
} from '../../actionTypes'

const initialState = {};

export default (state = initialState, {type, payload, params}) => {
    switch (type){
        case FETCH_CLOTHES_IN_CATEGORIES_SUCCESS:
            const clothesInCategory = R.filter((clothe) =>
            {
                return clothe.gender === params.id[0] && clothe.category === params.id[1]}  , payload)
            console.log('clothesInCategory', clothesInCategory);
            return R.merge(state, clothesInCategory);
        default:
            return state
    }
}
