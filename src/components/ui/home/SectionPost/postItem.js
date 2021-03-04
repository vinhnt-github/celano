import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from "../../../core/Img";
import Heading from "../../../core/Heading";
import Rating from '../../../core/Rating'


import { configGlobal } from '../../../../assets/styledGlobal/configGlobal'

function PostItem({id,title,author,desc,date,comments,img,...props}) {
    
    return (
        <PostItemWrap className="col-fb-4 mb-2">
            <Img src = {img} alt = "post-image"/>
            <Heading tag = "h4" className = "mb-1-2 mt-1-2" text = {title}/>
            <Heading tag = "p" className = "mb-1-2 mt-1-2" text = {desc}/>
        </PostItemWrap>
    )
}
const PostItemWrap = styled.div`
    
`

export default PostItem;

