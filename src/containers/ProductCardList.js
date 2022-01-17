import React,{ useEffect } from 'react'
import ProductDetailsCard from "./ProductDetailsCard"
import { useSelector, useDispatch } from 'react-redux'
import { setProduct } from '../Redux/actions/productActions'
// import axious from 'axios'
import axios from 'axios'

function ProductCardList() {
    const response = useSelector((state) => state)
    const dispatch = useDispatch()
    const getProducts = () => {
        axios.get("https://fakestoreapi.com/products")
             .then(resp =>{
                 console.log(resp.data)
                dispatch(setProduct(resp.data))
             })
    }

   useEffect(() => {
    getProducts()
   }, []) 
    return (
        <div className="">
            <ProductDetailsCard/>
        </div>
    )
}

export default ProductCardList
