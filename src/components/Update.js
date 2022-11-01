import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const products=useLoaderData()
    const [product,setProduct]=useState(products)
    //  console.log(products);

    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(product);
        fetch(`http://localhost:5000/product/${products._id}`,{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Product Updated')
            }
        })
        
    }
    const handleInputBlur=(event)=>{
        const name=event.target.name
        const value=event.target.value
        const newProduct={...product}
        newProduct[name]=value
        setProduct(newProduct)
    }
    return (
        <div className='product-container'>
        <form onSubmit={handleSubmit}>
            <input onChange={handleInputBlur} defaultValue={product.name} type="text"  name='name' placeholder='Product Name' />
            <br />
            <input  onChange={handleInputBlur} defaultValue={product.price} type="text" name="price" placeholder='product price' id="" />
            <br />
            <input  onChange={handleInputBlur} defaultValue={product.quantity} type="text" name="quantity" placeholder='product quantity' id="" />
             <br />
            <input  onChange={handleInputBlur} defaultValue={product.photoURL} type="text" name="photoURL" placeholder='product image' id="" />
             <br />
             <input type="submit" value='add product' />    
        </form>
        </div>
    );
};

export default Update;