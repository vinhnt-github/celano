import React from 'react';
import styled from 'styled-components';

import  useHover  from './hook/useHover'

import { configGlobal } from './../../assets/styledGlobal/configGlobal'

import ArrowRightImg from './../../assets/images/arrowRigh.png'
import ArrowRightHoverImg from './../../assets/images/arrowRightHover.png'
import Img from './Img'
import Heading from './Heading'



function Icontext({ tag, text,className, ...props }) {
    const [refHover,isHover] = useHover()
    console.log();
    return (
        <IcontextWrap ref={refHover} className="d-flex ai-center" className= {className}>
            <Img src = {isHover?ArrowRightHoverImg:ArrowRightImg} alt="text-icon"/>
            <Heading tag = {tag} text = {text} {...props}/>
        </IcontextWrap> 
    )
}
const IcontextWrap = styled.div`
    img {
        margin-right: 0.5rem;
        transition: ${configGlobal.transition}
    }
    :hover {
        img, p {
            transition: ${configGlobal.transition}
        }
        p {
            color: ${configGlobal.colorPrimary}
        }
    }
    p {
        display: inline-block;
        transition: ${configGlobal.transition}
    }
`

export default React.memo(Icontext);