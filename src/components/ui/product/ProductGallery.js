import React, { useState } from 'react'
import styled from 'styled-components'
import Img from './../../core/Img'

import arrowTop from './../../../assets/images/arrowTop.png'
import arrowBottom from './../../../assets/images/arrowBottom.png'



function ProductGallery({imgs}) {
    const [imgActive,setImgActive] = useState(0);
    const nextSlide = () =>{
        var nextSlide = (imgActive - 1)<0?(imgs.length-1):(imgActive - 1);
        setImgActive(nextSlide);
    }
    const prevSlide = () =>{
        var nextSlide = (imgActive + 1)>(imgs.length-1)?0:(imgActive + 1);
        setImgActive(nextSlide);
    }
    return (
        <ProductGalleryWrap className="product_gallery d-flex">
            <div className="product_gallery__left">
                {
                    !!imgs && imgs.map((src,index)=>
                        <div className = {`gallery-item ${imgActive==index?"active":""}`} key={index}>
                            <Img src = {src} alt = "gallery-image" onClick = {()=>setImgActive(index)}/>
                        </div>)
                }
                <div className="navigation d-flex jc-bw">
                    <button onClick = {()=>nextSlide()}>
                        <Img src ={arrowTop} alt ="next-slide"/>
                    </button>
                    <button onClick = {()=>prevSlide()}>
                        <Img src ={arrowBottom} alt ="prev-slide"/>
                    </button>
                </div>
            </div>
            <div className="product_gallery__right">
                {
                    !!imgs && <Img src = {imgs[imgActive]} alt = "gallery-image"/>
                }
            </div>
        </ProductGalleryWrap>
    )
}

ProductGallery.propTypes = {
    
}
const ProductGalleryWrap = styled.div`
    .product_gallery{
        &__left{
            width:80px;
            display:inline-block;
            margin-right:15px;
            .gallery-item.active{
                border: 2px solid rgb(27, 201, 190);
                transition: all 0.3s ease 0s;
            }
        }
        &__right{
            display:inline-block;
            width:calc(100% - 80px - 15px);
            .gallery-item.active{
                border: 2px solid rgb(27, 201, 190);
                transition: all 0.3s ease 0s;
            }
        }
    }
    
`

export default ProductGallery

