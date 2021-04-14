import React,{useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from './Img'

import minusImg from '../../assets/images/minus.png';
import plusImg from '../../assets/images/plus.png';


function Quantity({stock}) {
    const [quantity,setQuantity] = useState(1);

    function ClickChangeQuantity(e){
        e==='minus'&& quantity > 1 && setQuantity(parseInt(quantity) - 1);
        e==='plus'&& quantity < stock && setQuantity(parseInt(quantity) + 1);
    }
    function onChangeQuantity(e){
        setQuantity(e.target.value);
    }
    return (
        <QuantityWrap>
            <button className = {quantity>1?"quantity-button":"quantity-button disable"} onClick = {()=>ClickChangeQuantity('minus')}>
                <Img src={minusImg} alt = 'minus-button'/>
            </button>
            <input className ="quantity-number" type="number" value={quantity} onChange ={(e)=>onChangeQuantity(e)}></input>
            <button className = {quantity<stock?"quantity-button":"quantity-button disable"} onClick = {()=>ClickChangeQuantity('plus')}>
                <Img src={plusImg} alt = 'plus-button'/>
            </button>
        </QuantityWrap>
    )
}

Quantity.propTypes = {

}
const QuantityWrap = styled.div`
    button.quantity-button {
        height: 40px;
        width: 40px;
        border: none;
        cursor: pointer;
    }
    button.quantity-button.disable {
        opacity: 0.7;
        cursor: unset;
    }
    .quantity-number{
        width: 50px;
        height: 40px;
        border: none;
        text-align: center;
    }
`
export default React.memo(Quantity)



