import React,{useContext,useState,useEffect} from 'react'

export const HomeContext = React.createContext();
const HomeContextProvider = ({children})=>{
    const [products,setProducts] = useState({});
    const [posts,setPosts] = useState({})

    useEffect(() => {
        async function fetchProduct() {
            const res = await fetch("https://celano-rest-api.herokuapp.com/products");
            res
                .json()
                .then(res => setProducts(res.products))
                .catch(err => console.log(err));
        }
        fetchProduct();
    }, [])
    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch("https://602ca4e530ba720017223363.mockapi.io/Post");
            res
                .json()
                .then(res => setPosts(res))
                .catch(err => console.log(err));
        }
        fetchPosts();
    }, [])
    const HomeContextValue={
        products,
        posts
    }
    return (
        <HomeContext.Provider  value = {HomeContextValue}>
            {children}
        </HomeContext.Provider>
    )
}
export default HomeContextProvider;

