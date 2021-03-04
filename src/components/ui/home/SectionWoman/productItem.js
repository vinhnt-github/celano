import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "./../../../core/Img";
import Heading from "./../../../core/Heading";
import Rating from './../../../core/Rating'

import {Link} from 'react-router-dom';


import { configGlobal } from './../../../../assets/styledGlobal/configGlobal'

function ProductItem({id,name,image,status,price,rating,...props}) {
    const withRating = (rating*100) / 5;
    return (
        <ProductItemWrap className="col-fb-4 mb-2">
            <Link to = {`/product/${id}`}>
                <Img src = {image} alt = "product-image"/>
                <Heading tag = "h6" className = "mb-1-2 mt-1-2" text = {name}/>
            </Link>
            <div className = "price">
                {
                    price && (<span className = "regular_price color-primary mr-1-2">${price}</span>)
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

