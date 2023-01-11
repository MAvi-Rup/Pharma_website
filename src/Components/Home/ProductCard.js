import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductDetails from './ProductDetails';

const ProductCard = ({product}) => {
    const navigate = useNavigate()
    const navigateProduct = id => {
        navigate(`/specialproduct/${id}`)
    }
    return (
        <div className='col-md-3 pe-3 mb-5'>
           <img onClick={()=>{navigateProduct(product.id)}} src={product.img} alt="" />
        </div>
    );
};
export default ProductCard;