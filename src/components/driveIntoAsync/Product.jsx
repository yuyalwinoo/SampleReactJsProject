import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import './product.css';
const Product= () => {
    const [products,setProducts] = useState([]);
    const [isLoading,setLoading] = useState(false);
    const [error,setError] = useState('');

    useEffect(()=>{
        getProducts();
    },[])
    const getProducts = async()=>{
        try {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if(!response.ok) {
                throw new Error('Something went wrong!');
            }
            const products = await response.json();
            setProducts(products);
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    }
    return (
        <>
            <h1>Item Store</h1>
            <section className='item-section'>
            {
                products.map(product =>{
                    return(
                        <ProductItem key={product.id} product={product}/>
                    )
                })
            }
            </section>
            {
                isLoading && <h1>Loading ...</h1>
            }
            {
                error && <h1>{error}</h1>
            }
        </>
    )
}
export default Product
