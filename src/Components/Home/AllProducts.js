import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';

const AllProducts = () => {
    const [allProducts,setProduct]= useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/allProducts`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    })
    const product = allProducts.slice(0,8)
    const navigate = useNavigate()
    const navigateProduct = id => {
        navigate(`/allproduct/${id}`)
    }
    return (
        <div>
            <div className="container pt-5 mb-5">
                <h1 className='pb-5 text-black'><span className='border-bottom border-primary pb-3'>Our</span>Products</h1>
                <div className='row pt-5 pb-5'>
                       {
                        product.map((product=><div className="col-md-3 pe-2 pb-3"><img onClick={()=>{navigateProduct(product._id)}} src={product.img} width='255px' /> </div>))
                       }
                       {allProducts.length>8 ?<button className='btn btn-primary' onClick={()=>{allProducts.map((product2=><div className="col-md-3 pe-2 pb-3"><img onClick={()=>{navigateProduct(product2._id)}} src={product2.img} width='255px' /> </div>))}}>Load More</button> :<></>}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;