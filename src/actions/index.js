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
    CLEAR_BASKET,

    CHANGE_COLOR,
    CHANGE_SIZE,

    BASKET_ITEM_MINUS
} from '../actionTypes'


import {
    fetchClothes as fetchClothesApi,
    fetchCategories as fetchCategoriesApi,
    fetchClothesInCategory as fetchClothesInCategoryApi,
    fetchClothesById as fetchClothesByIdApi
} from '../api'


export const fetchClothes = () => dispatch => {
    dispatch({type: FETCH_CLOTHES_START})
    try {
        const clothes = fetchClothesApi()
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

export const fetchCategories = () => dispatch => {
    dispatch({type: FETCH_CATEGORIES_START})
    try {
        const categories = fetchCategoriesApi()
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


export const fetchClothesInCategory = params => dispatch => {
    dispatch({type: FETCH_CLOTHES_IN_CATEGORIES_START})
    try {
        const clothes =  fetchClothesInCategoryApi()

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


export const fetchClothesById = id =>  dispatch => {
    dispatch({type: FETCH_CLOTHE_BY_ID_START})
    try {
        const clothe =  fetchClothesByIdApi(id)

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


export const addClotheToBasket = clothe => dispatch => {
    dispatch({
        type: ADD_CLOTHE_TO_BASKET,
        payload: clothe
    })
}


export const removeClotheFromBasket = clothe => dispatch => {
    dispatch({
        type: REMOVE_CLOTHE_FROM_BASKET,
        payload: clothe
    })
}

export const changeColor = colorId => dispatch => {
    dispatch({
        type: CHANGE_COLOR,
        payload: colorId
    })
}

export const changeSize = sizeId => dispatch => {
    dispatch({
        type: CHANGE_SIZE,
        payload: sizeId
    })
}


export const basketItemMinus = clothe => dispatch => {
    if (clothe.count > 1) {
        dispatch({
            type: BASKET_ITEM_MINUS,
            payload: clothe
        })
    }

}
