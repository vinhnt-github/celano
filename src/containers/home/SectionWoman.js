import React, { useContext } from 'react'
import styled from 'styled-components';
import { HomeContext } from './../../contexts/Home.context';
import ProductItem from './../../components/ui/home/SectionWoman/productItem';



export default function SectionWoman() {
    const {products} = useContext(HomeContext)
    return (
        <section>
            <SectionWomanWrap>
                <div className = "container">
                    <div className="col-fb-8">

                        <div className = "row-fb">
                            {
                                products.length > 0 && products.map(({id,title,img,newStatus,regular_price,salce_price},index)=> <ProductItem key = {index} id = {id} title= {title} img={img} newStatus = {newStatus} regular_price = {regular_price} salce_price = {salce_price} />)
                            }
                            
                        </div>
                    </div>
                </div>
                

            </SectionWomanWrap>
        </section>
    )
}
const SectionWomanWrap = styled.div`

`
