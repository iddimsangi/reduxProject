import { actionTypes } from '../constants/actionTypes'
const initialState = {
    products:[
        {
            name:'iddi',
            price:565
        }
    ]
}
 const productReducer = (state = initialState, {type, payload}) =>{
    switch(type){
    case actionTypes.SET_PRODUCTS:
        return state
    case actionTypes.SELECTED_PRODUCT:
        return state
    case actionTypes.REMOVE_SELECTED_PRODUCT:
        return state
    }
    return state
}
export default productReducer