import {
    FETCH_CLOTHES_START,
    FETCH_CLOTHES_SUCCESS,
    FETCH_CLOTHES_FAILURE,

    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,

    FETCH_CLOTHES_IN_CATEGORIES_START,
    FETCH_CLOTHES_IN_CATEGORIES_SUCCESS,
    FETCH_CLOTHES_IN_CATEGORIES_FAILURE
} from '../actionTypes'


import {
    fetchClothes as fetchClothesApi,
    fetchCategories as fetchCategoriesApi,
    fetchClothesInCategory as fetchClothesInCategoryApi
} from '../api'


export const fetchClothes = () => async dispatch => {
    dispatch({type: FETCH_CLOTHES_START})
    try {
        const clothes = await fetchClothesApi()
        dispatch({
            type: FETCH_CLOTHES_SUCCESS,
            payload: clothes
        })
    } catch (err) {
        dispatch({
            type: FETCH_CLOTHES_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const fetchCategories = () => async dispatch => {
    dispatch({type: FETCH_CATEGORIES_START})
    try {
        const categories = await fetchCategoriesApi()
        console.log(categories);
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: categories
        })
    } catch (err) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            payload: err,
            error: true
        })
    }
}


export const fetchClothesInCategory = params => async dispatch => {
    dispatch({type: FETCH_CLOTHES_IN_CATEGORIES_START})
    try {
        const clothes = await fetchClothesInCategoryApi()

        dispatch({
            type: FETCH_CLOTHES_IN_CATEGORIES_SUCCESS,
            payload: clothes,
            params: params
        })
    } catch (err) {
        dispatch({
            type: FETCH_CLOTHES_IN_CATEGORIES_FAILURE,
            payload: err,
            error: true
        })
    }
}
