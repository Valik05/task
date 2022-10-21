export const addProduct = (products) =>{
    return {
        type: 'PRODUCT',
        payload: products
    }
}
export const loading = () =>{
    return {
        type: 'LOADING',
    }
}
export const error = (e) =>{
    return {
        type: 'ERROR',
        payload: e
    }
}

export const edit = (product) => {
    return {
        type:'EDIT',
        payload: product
    }
}
export const addNewProduct = (product) => {
    return {
        type:'ADD',
        payload: product
    }
}
export const deleteProduct = (editedArr) =>{
    return{
        type: 'DELETE',
        payload: editedArr
    }
}
export const sorted = (sortType) =>{
    return{
        type: 'SORT',
        payload: sortType
    }
}
export const writeComment = (comment, productId) =>{
    return {
        type: 'COMMENT',
        payload: comment,
        id: productId
    }
}