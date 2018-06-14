import R from 'ramda';
import clothes from './mockClothes'
import categories from './mockCategories'


export const fetchClothes =  () => {
    return clothes
}

export const fetchClothesInCategory =  () => {
    return clothes
}


export const fetchCategories =  () => {
    return categories
}

export const fetchClothesById = id => {
    return R.find(R.propEq('id', id), clothes)
}
