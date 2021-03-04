import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import ProductContainer from './../containers/product/ProductContainer'





const Product = () => {
    return (
        <ProductWrap>
            <ProductContainer/>
        </ProductWrap>
    );
};

const ProductWrap = styled.div`

`

export default Product;