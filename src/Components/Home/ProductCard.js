import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className='col-md-3 pe-3 mb-5'>
            <img src={product.img} alt="" />
        </div>
    );
};

export default ProductCard;