import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { ProductContext } from '../../contexts/Product.context'; 

import ProductTop from './ProductTop';
import ProductBottom from './ProductBottom'




function ProductContainer(props) {
    const { id } = useParams();
    const {product,fetchProduct} = useContext(ProductContext)
    useEffect(() => {
        fetchProduct(id)
    }, [])
    return (
        <ProductContainerWrap className = "container">
            <ProductTop product = {product}/>
            <ProductBottom/>
        </ProductContainerWrap>
    )
}

const ProductContainerWrap = styled.div`

`

export default ProductContainer

