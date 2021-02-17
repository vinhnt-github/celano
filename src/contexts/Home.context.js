import React,{useContext,useState,useEffect} from 'react'

export const HomeContext = React.createContext();
const HomeContextProvider = ({children})=>{
    const [Product,setProduct] = useState();
    const HomeContextValue={
        product:12,
    }
    return (

        <HomeContext.Provider  value = {HomeContextValue}>
            {children}
        </HomeContext.Provider>

    )
}
export default HomeContextProvider;

