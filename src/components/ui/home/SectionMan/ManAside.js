import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Heading from '../../../core/Heading';
import Button from '../../../core/Button';
import Img from '../../../core/Img';
import Icontext from "../../../core/Icontext";

import imgMan from './../../../../assets/images/imgMan.jpg'

const texts = [
    'jean',
    'shirt',
    'dress',
    'glass',
    'shoes',
    'accessories'
]

function WomenAside(props) {
    return (
        <WomenAsideWrap>
            <Heading tag = "h3" text = "Man"/>
            <Button className = "btn btn-primary smaller text-uppercase mb-2" tag = "button" text = "Popular products" />
            <Img src = {imgMan} alt = "image-women"/>
            <div className ="row-fb mt-1 mb-1">
                {
                    texts.map((text,index)=><Icontext key = {index} className = "text-capitalize mt-1-2 mb-1-2 col-fb-6"  tag="p" text = {text}/>)
                }
            </div>
            <Button className = "btn btn-secondary text-uppercase w-100" tag = "button" text = "View all" />
        </WomenAsideWrap>
    )
}
const WomenAsideWrap = styled.div`

`

export default  WomenAside;

