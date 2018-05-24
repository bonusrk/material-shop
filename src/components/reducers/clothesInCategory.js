import R from 'ramda';

import {
    FETCH_CLOTHES_IN_CATEGORIES_SUCCESS,
} from '../../actionTypes'

const initialState = [];

export default (state = initialState, {type, payload, params}) => {
    switch (type){
        case FETCH_CLOTHES_IN_CATEGORIES_SUCCESS:
            const clothesInCategory = R.filter((clothe) =>
            {
                return clothe.categoryId === params.id}  , payload)
            console.log('clothesInCategory', clothesInCategory);
            console.log('params.id', params.id);
            return clothesInCategory;
        default:
            return state
    }
}
