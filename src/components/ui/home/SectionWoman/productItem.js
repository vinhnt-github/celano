import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "./../../../core/Img";
import Heading from "./../../../core/Heading";
import Rating from './../../../core/Rating'


import { configGlobal } from './../../../../assets/styledGlobal/configGlobal'

function ProductItem({id,title,img,newStatus,regular_price,salce_price,rating}) {
    const withRating = (rating*100) / 5;
    return (
        <ProductItemWrap className="col-fb-4 mb-2">
            <Img src = {img} alt = "product-image"/>
            <Heading tag = "h6" className = "mb-1-2 mt-1-2" text = {title}/>
            <div className = "price">
                {
                    regular_price && (<span className = "regular_price color-primary mr-1-2">${regular_price}</span>)
                }
                {
                    salce_price && (<span className = "salce_price color-desc text-dec-through">${salce_price}</span>)
                }
            </div>
            {rating && <Rating withRating = {withRating}/>}
        </ProductItemWrap>
    )
}
const ProductItemWrap = styled.div`
    .price regular_price {
        color : ${configGlobal.colorPrimary}
    }
    .price regular_price {
        color : ${configGlobal.colorDesc}
    }
`

export default ProductItem;

