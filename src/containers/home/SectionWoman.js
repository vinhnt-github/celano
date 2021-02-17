import React, { useContext } from 'react'
import { HomeContext } from './../../contexts/Home.context';


export default function SectionWoman() {
    const {product} = useContext(HomeContext)
    console.log(product);
    return (
        <div>
            
        </div>
    )
}
