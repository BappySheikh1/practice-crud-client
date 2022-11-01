import React from 'react';
import { Link } from 'react-router-dom';
import './file.css'

const Header = () => {
    return (
        <div className='header-container'>
             <Link to='/'> Home</Link>
             <Link to='/update'> update</Link>
             <Link to='/addproduct'> Add Product</Link>
        </div>
    );
};

export default Header;