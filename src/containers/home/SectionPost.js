import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { HomeContext } from './../../contexts/Home.context'
import styled from 'styled-components';

import PostItem from './../../components/ui/home/SectionPost/postItem'


function SectionPost(props) {
    const {posts} = useContext(HomeContext)
    return (
        <section>
            <SectionPostWrap className = "container row-fb">
                {
                    posts.length && posts.map(({id,title,author,desc,date,comments,img},index)=><PostItem key = {index} id = {id} title = {title} author= {author} desc = {desc} date = {date} comments = {comments} img = {img}/>)
                }
            </SectionPostWrap>
        </section>
    )
}

const SectionPostWrap = styled.div`

`

export default SectionPost;

