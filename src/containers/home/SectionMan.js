import React, { useContext,useEffect } from 'react'
import styled from 'styled-components';
import { ProductContext } from '../../contexts/Product.context';

import ProductItem from '../../components/ui/home/SectionWoman/productItem';
import ManAside from '../../components/ui/home/SectionMan/ManAside';



export default function SectionMan() {
    const {man_products ,fetchProductMan} = useContext(ProductContext)
    useEffect(() => {
        fetchProductMan();
    }, [])
    var products = man_products;

    return (
        <section>
            <SectionManWrap>
                <div className = "container row-fb">
                    <div className=" col-fb-8">
                        <div className="pr-5">
                            <div className = "row-fb">
                                {
                                    products && products.length > 0 && products.map(({_id,name,image,status,price,rating,...props},index)=> <ProductItem key ={index} id = {_id} name= {name} image={image} status = {status} price = {price}  rating= {rating} {...props} />)
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-fb-4">
                        <ManAside/>
                    </div>
                </div>
                

            </SectionManWrap>
        </section>
    )
}
const SectionManWrap = styled.div`

`
