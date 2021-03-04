import React from 'react'
import PropTypes from 'prop-types'

import ProductGallery from './../../components/ui/product/ProductGallery'
import styled from 'styled-components'


function ProductTop({product}) {
    return (
        <ProductTopWrap>
            <ProductGallery imgs = {product.images}/>
        </ProductTopWrap>
    )
}

ProductTop.propTypes = {

}
const ProductTopWrap = styled.div`

`
export default ProductTop;

