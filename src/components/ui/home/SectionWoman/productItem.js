import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "./../../../core/Img";
import Heading from "./../../../core/Heading";

function ProductItem({id,title,img,newStatus,regular_price,salce_price}) {
    console.log(id,img,newStatus,regular_price,salce_price);
    return (
        <ProductItemWrap className="col-fb-4">
            <Img src = {img} alt = "product-image"/>
            <Heading tag = "h6" text = {title}/>
            <div className = "price">
                {
                    regular_price && (<span className = "regular_price">{regular_price}</span>)
                }
                {
                    salce_price && (<span className = "salce_price">{salce_price}</span>)
                }
            </div>
        </ProductItemWrap>
    )
}
const ProductItemWrap = styled.div`

`

export default ProductItem;

