import React from 'react'
import PropTypes from 'prop-types'

import ProductGallery from './../../components/ui/product/ProductGallery'
import ProductImfomation from './../../components/ui/product/ProductImfomation'
import styled from 'styled-components'


function ProductTop({product}) {
    return (
        <ProductTopWrap>
            <div className = "row-fb">
                <div className = "col-fb-6">
                    <div className = "inter">
                        <ProductGallery imgs = {product.images}/>
                    </div>  
                </div>
                <div className = "col-fb-6">
                    <div className = "inter">
                        <ProductImfomation {...product}/>
                    </div>
                </div>
            </div>
        </ProductTopWrap>
    )
}

ProductTop.propTypes = {

}
const ProductTopWrap = styled.div`

`
export default ProductTop;

