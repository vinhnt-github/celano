import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from '../../core/Heading';
import Button from '../../core/Button';
import Rating from '../../core/Rating';
import ColorSwatch from '../../core/ColorSwatch';
import Quantity from '../../core/Quantity';


function ProductImfomation(props) {
    console.log(props);
    const {name,colors,rating,review,stock,price,sku,description} = props;
    return (
        <ProductImfomationWrap>
            <Heading tag = 'h2' text = {name} className = "text-cap"></Heading>
            <div className ="row-fb">
                <Rating rating = {rating}></Rating>
                <p style={{margin: "0 0 0 10px"}}>{review} review</p>
            </div>
            <div className="product-price">
                <span className = "product-price-regular color-primary">${price}</span>
            </div>
            <div>
                <p className = "">SKU : {sku}</p>
            </div>
            <div>
                <p className = "">Availability : {stock?`Instock (${stock})`:'Outstock'} </p>
            </div>
            <div>
                <p className = "">{description}</p>
            </div>
            <ColorSwatch colors = {colors}/>
            <Quantity stock = {stock}></Quantity>
        </ProductImfomationWrap>
    )
}

ProductImfomation.propTypes = {

}
const ProductImfomationWrap = styled.div`
    .product-price-regular{
        font-size:30px;
    }
`
export default ProductImfomation;

