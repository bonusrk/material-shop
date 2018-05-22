import R from 'ramda';
import clothes from './mockClothes'
import categories from './mockCategories'


export const fetchClothes = async () => {
    return new Promise(resolve => {
        resolve(clothes)
    })
}

export const fetchClothesInCategory = async () => {
    return new Promise(resolve => {
        resolve(clothes)
    })
}


export const fetchCategories = async () => {
    return new Promise(resolve => {
        resolve(categories)
    })
}

export const fetchClothesById = async id => {
    return new Promise((resolve, reject)=> {
        const clothe = R.find(R.propEq('id', id), clothes)
        resolve(clothe)
    })
}
