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
