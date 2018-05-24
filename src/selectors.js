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

export const getClothesInCategory = (state, ownProps) => {
    console.log('ownProps', ownProps);
    const clothes = Object.values(state.clothes);
    console.log('clothes', clothes);
    let clothesInCategory = []
    clothes.map((clothe) => {
        clothe.categoryId===ownProps.params.id ? clothesInCategory.push(clothe) : ''})
    console.log('clothesInCategory', clothesInCategory)
    return clothesInCategory
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

    let mass1 = state.basket.slice()
    let mass2 =  state.basket.slice()
    let result = []

    for (let i = 0; i<mass2.length; i++){
        let basket = null;
         basket = mass2[i];
        let count = 0

        for (let  j = 0; j<mass1.length ; j++){
            let mass = mass1[j]
            if(basket.id === mass.id &&
                basket.currentColor.id === mass.currentColor.id &&
                basket.currentSize.id===mass.currentSize.id){
                count++
                mass1.splice(j, 1)
                j=j-1
            }
        }
        if(count> 0 ){
            basket.count = count
            result.push(basket)}
    }
    return result
}


export const getBasketItemsCount = state => {
    return state.basket.length === 0 ? '' : state.basket.length
}


export const getTotalPrice = state =>{
    let totalPrice = 0
    state.basket.map((item) => totalPrice = totalPrice + parseFloat(item.price) )
    return totalPrice.toFixed(2)
}
