import { combineReducers } from 'redux'
import productReducer  from '../reducers/productsReducer'
 const reducers = combineReducers({
    allProducts: productReducer
})
export default reducers