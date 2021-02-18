import React,{useContext,useState,useEffect} from 'react'

export const HomeContext = React.createContext();
const HomeContextProvider = ({children})=>{
    const [products,setProducts] = useState({});

    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch("https://602ca1b430ba72001722333e.mockapi.io/Product");
            res
                .json()
                .then(res => setProducts(res))
                .catch(err => console.log(err));
        }
        fetchProduct();
    }, [])
    console.log(products);
    const HomeContextValue={
        products,
    }
    return (
        <HomeContext.Provider  value = {HomeContextValue}>
            {children}
        </HomeContext.Provider>
    )
}
export default HomeContextProvider;

