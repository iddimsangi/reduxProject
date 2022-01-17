import React from 'react'
import ProductDetailsCard from "./ProductDetailsCard"
import { useSelector } from 'react-redux'
function ProductCardList() {
    const response = useSelector((state) => state)
    // console.log(response)
    return (
        <div>
            <ProductDetailsCard/>
        </div>
    )
}

export default ProductCardList
