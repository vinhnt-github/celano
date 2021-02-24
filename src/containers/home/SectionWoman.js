import React, { useContext } from 'react'
import styled from 'styled-components';
import { HomeContext } from './../../contexts/Home.context';

import ProductItem from './../../components/ui/home/SectionWoman/productItem';
import WomenAside from './../../components/ui/home/SectionWoman/WomenAside';



export default function SectionWoman() {
    const {products} = useContext(HomeContext)
    console.log(products);
    return (
        <section>
            <SectionWomanWrap>
                <div className = "container row-fb">
                    <div className="col-fb-4">
                        <WomenAside/>
                    </div>
                    <div className=" col-fb-8">
                        <div className="pl-5">
                            <div className = "row-fb">
                                {
                                    products.length > 0 && products.map(({id,title,img,newStatus,regular_price,salce_price,rating},index)=> <ProductItem key ={index} id = {id} title= {title} img={img} newStatus = {newStatus} regular_price = {regular_price} salce_price = {salce_price} rating= {rating} />)
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                

            </SectionWomanWrap>
        </section>
    )
}
const SectionWomanWrap = styled.div`

`
