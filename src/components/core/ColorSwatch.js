import React,{useState} from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import imgChecked from '../../assets/images/checked.png'

function ColorSwatch({colors}) {
    console.log(imgChecked);
    const[colorActive,setColorActive] = useState(0) 
    function selectColor(c){
        setColorActive(c);
    }
    return (
        <ColorSwatchWrap>
            {
                colors && colors.length && colors.map((c,index) =>
                    <span className ={colorActive === c?"color_item active":"color_item"} key = {index} style={{background:c}} onClick={()=>selectColor(c)}></span>
                )
            }
        </ColorSwatchWrap>
    )
}

ColorSwatch.propTypes = {

}
const ColorSwatchWrap = styled.div`
    .color_item{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-block;
        margin-right: 5px;
        position: relative;
    }
    .color_item.active::before{
        content: "";
        background-image: url(${imgChecked});
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        transform: translate(-50%, -50%);
        background-size: cover;
    }
`

export default React.memo(ColorSwatch)

