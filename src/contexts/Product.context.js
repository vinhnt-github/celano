import React,{useContext,useState,useEffect,useReducer} from 'react'
import PropTypes from 'prop-types'
import {reducer} from '../reducers/ProductReduce'

import { 
    HOME_PRODUCT_WOMAN,
    HOME_PRODUCT_MAN,
    SINGLE_PRODUCT

 } from './../reducers/ActionTypes'



export const ProductContext = React.createContext()
const uri = "https://celano-rest-api.herokuapp.com"
const uri_products = `${uri}/products`
const uri_woman = `${uri}/productcategories/602fd7a16ab8691e35e31088/products`
const uri_man = `${uri}/productcategories/602fd7a96ab8691e35e31089/products`

const initialState = {
    man_products: [],
    woman_products: [],
    products: [],
    product: {}
}

export function ProductContextProvider({children}) {
    const [state,dispatch] = useReducer(reducer, initialState)

    const fetchProductWoman = async () => {
        const res = await fetch(uri_woman);
            res
                .json()
                .then(res => dispatch({type : HOME_PRODUCT_WOMAN,payload : res.categories}))
                .catch(err => console.log(err));
    }
    const fetchProductMan = async () => {
        const res = await fetch(uri_man);
            res
                .json()
                .then(res => dispatch({type : HOME_PRODUCT_MAN,payload : res.categories}))
                .catch(err => console.log(err));
    }
    const fetchProduct = async (id) => {
        const res = await fetch(uri_products + "/" + id);
            res
                .json()
                .then(res => dispatch({type : SINGLE_PRODUCT,payload : res}))
                .catch(err => console.log(err));
    }
     
    return (
        <ProductContext.Provider value = {{...state,fetchProductWoman,fetchProductMan,fetchProduct}}>
            {children}
        </ProductContext.Provider>
    )
}




