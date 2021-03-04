import React, { useContext,useEffect } from 'react'
import styled from 'styled-components';
import { ProductContext } from './../../contexts/Product.context';

import ProductItem from './../../components/ui/home/SectionWoman/productItem';
import WomenAside from './../../components/ui/home/SectionWoman/WomenAside';



export default function SectionWoman() {
    const {woman_products ,fetchProductWoman} = useContext(ProductContext)
    useEffect(() => {
        fetchProductWoman();
    }, [])

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
                                    woman_products.length > 0 && woman_products.map(({_id,name,image,status,price,rating,...props},index)=> <ProductItem key ={index} id = {_id} name= {name} image={image} status = {status} price = {price}  rating= {rating} {...props} />)
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
