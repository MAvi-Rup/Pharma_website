import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProduct';
import ProductCard from './ProductCard';

const AllProducts = () => {
    const [isCompleted, setIsCompleted] = useState(false)
    // const [allProducts,setProduct]= useState([])
    // useEffect(()=>{
    //     fetch(`http://localhost:5001/allProducts`)
    //     .then(res=>res.json())
    //     .then(data=>setProduct(data))
    // })
    const [products,setProduct] = useProducts()
    const product = products.slice(0,8)
    const navigate = useNavigate()
    const navigateProduct = id => {
        navigate(`/allproduct/${id}`)
    }
    const loadMore = ()=>{
        setIsCompleted(true)
    }
    return (
        <div>
            <div className="container pt-5 mb-5">
                <h1 className='pb-5 text-black'><span className='border-bottom border-primary pb-3'>Our</span>Products</h1>
                <div className='row pt-5 pb-5'>
                       {
                        isCompleted != true ?  product.map((product=><div className="col-md-3 pe-2 pb-3"><img onClick={()=>{navigateProduct(product._id)}} src={product.img} width='255px' /> </div>)): products.map((product=><div className="col-md-3 pe-2 pb-3"><img onClick={()=>{navigateProduct(product._id)}} src={product.img} width='255px' /> </div>))
                       }
                       {/* {
                        product.map((product=><div className="col-md-3 pe-2 pb-3"><img onClick={()=>{navigateProduct(product._id)}} src={product.img} width='255px' /> </div>))
                       } */}

                       {isCompleted != true ?<button className='btn btn-primary' onClick={loadMore}>Load More</button> :<button className='btn btn-primary' disabled onClick={loadMore}>Load More</button>}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;