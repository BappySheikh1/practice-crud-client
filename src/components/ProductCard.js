import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const productCard = ({product,products,setProduct}) => {
    // console.log(product);
    
    const {name,price,photoURL,quantity}=product

    const handleRemove=(product)=>{
        const agree=window.confirm(`are you sure to delete this items ${product._id}`)
        if(agree){
          fetch(`http://localhost:5000/product/${product._id}`,{
            method:"DELETE"
          })
          .then(res => res.json())
          .then(data => {
            // console.log(data);
            if(data.deletedCount > 0){
                alert('delete confirm')
                const remaining=products.filter(pt => pt._id !== product._id)
                setProduct(remaining)
            }
            
          })
        }
//    console.log("Remove for daynami product", product._id);
    }



    return (
        <div className='card-container'>
            <div>
                <img src={photoURL} alt="" />
            </div>
            <div className='body'>
            <div className='card-body'>
             <h4>Name: {name}</h4>
             <p>Price: ${price}</p>
             <p>Quantity: {quantity}</p>
            </div>
            <div className='main-btn'>
                <button onClick={()=>handleRemove(product)} className='btn-product'>X</button>
                <br />
                <Link to={`/update/${product._id}`}><button>Update</button></Link>
            </div>
            </div>
        </div>
    );
};

export default productCard;