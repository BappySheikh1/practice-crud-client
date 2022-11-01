import React, { useState } from 'react';

const AddProduct = () => {
   const [product,setProduct]=useState({})

    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(product);
        fetch('http://localhost:5000/product',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
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
            <input onChange={handleInputBlur} type="text" name='name' placeholder='Product Name' />
            <br />
            <input  onChange={handleInputBlur} type="text" name="price" placeholder='product price' id="" />
            <br />
            <input  onChange={handleInputBlur} type="text" name="quantity" placeholder='product quantity' id="" />
             <br />
            <input  onChange={handleInputBlur} type="text" name="photoURL" placeholder='product image' id="" />
             <br />
             <input type="submit" value='add product' />    
        </form>
        </div>
    );
};

export default AddProduct;