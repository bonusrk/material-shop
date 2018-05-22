import R from 'ramda';

export const getCategories = (state) => {
    const {categories} = state
    const getMan = category => {
       return category.gender==='man'
    }
    const newData = R.filter(getMan, categories)

    // const cat = R.compose(newData)(state.categories);

    return Object.assign(state, newData);
}


/*export const getClothesInCategory = (state, params) => {
    const clothes = R.filter((clothe) =>
    {
        return clothe.gender === params.id[0] && clothe.category === params.id[1]}  , state.clothes);
    const data = Object.values(clothes);

    return data
}*/
//todo: add clothes
export const getClotheById = (state, id) => R.prop(id, state.clothesInCategory)

export const getBasketClothesWithCount = state => {
    const clotheCount = id => R.compose(
        R.length,
        R.filter(basketId => R.equals(id, basketId))
    )(state.basket)
    const clotheWithCount = clothe => R.assoc('count', clotheCount(clothe.id), clothe)

    const uniqueIds = R.uniq(state.basket)
    const clothes = R.compose(
        R.map(clotheWithCount),
        R.map(id => getClotheById(state, id))
    )(uniqueIds)

    return clothes
}
