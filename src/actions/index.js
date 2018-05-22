import {
    FETCH_CLOTHES_START,
    FETCH_CLOTHES_SUCCESS,
    FETCH_CLOTHES_FAILURE,

    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,

    FETCH_CLOTHES_IN_CATEGORIES_START,
    FETCH_CLOTHES_IN_CATEGORIES_SUCCESS,
    FETCH_CLOTHES_IN_CATEGORIES_FAILURE,

    FETCH_CLOTHE_BY_ID_START,
    FETCH_CLOTHE_BY_ID_SUCCESS,
    FETCH_CLOTHE_BY_ID_FAILURE,

    ADD_CLOTHE_TO_BASKET,
    REMOVE_CLOTHE_FROM_BASKET,
    CLEAR_BASKET
} from '../actionTypes'


import {
    fetchClothes as fetchClothesApi,
    fetchCategories as fetchCategoriesApi,
    fetchClothesInCategory as fetchClothesInCategoryApi,
    fetchClothesById as fetchClothesByIdApi
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


export const fetchClothesById = id => async dispatch => {
    dispatch({type: FETCH_CLOTHE_BY_ID_START})
    try {
        const clothe = await fetchClothesByIdApi(id)

        dispatch({
            type: FETCH_CLOTHE_BY_ID_SUCCESS,
            payload: clothe,
        })
    } catch (err) {
        dispatch({
            type: FETCH_CLOTHE_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
}


export const addClotheToBasket = id => dispatch => {
    dispatch({
        type: ADD_CLOTHE_TO_BASKET,
        payload: id
    })
}


export const removeClotheFromBasket = id => dispatch => {
    dispatch({
        type: REMOVE_CLOTHE_FROM_BASKET,
        payload: id
    })
}
