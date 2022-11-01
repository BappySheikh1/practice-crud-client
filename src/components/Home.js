import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Home = () => {
    const product=useLoaderData()
    const [products,setProduct]=useState(product)
    
    return (
        <div>
            <h2>This is home {products.length}</h2>
            <div className='home-container'>
               {
                products.map(product => <ProductCard key={product._id} product={product} products={products} setProduct={setProduct} />)
               }
            </div>
        </div>
    );
};

export default Home;