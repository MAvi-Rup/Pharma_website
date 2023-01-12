import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const SpecialProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/specialProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    return (
        <div className='bg-primary'>
            <div className="container pt-5 mb-5">
                <h1 className='pb-5 text-white'><span className='border-bottom pb-3'>Speci</span>alized Products</h1>
                <div className='row pt-5 pb-5'>
                       {
                        products.map((product=><ProductCard key={product._id} product={product}></ProductCard>))
                       }
                </div>
            </div>
        </div>
    );
};

export default SpecialProducts;