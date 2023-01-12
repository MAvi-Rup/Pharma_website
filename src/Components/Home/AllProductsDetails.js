import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AllProductsDetails = () => {
    const { id } = useParams()
    const [productDetail, setProductDetail]= useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/allProducts/${id}`)
            .then(res => res.json())
            .then(data => setProductDetail(data))
    },[id])
    return (
        <div className='container w-75 m-auto'>
            <div className='row'>
                <div className='col-md-6 pe-4'>
                    <img src={productDetail.img} alt="" width='417px' />

                </div>
                <div className='col-md-6'>
                    <h1 className='bg-primary pt-2 pb-2 ps-3'>{productDetail.title}</h1>
                    <p><strong>Generic Name:</strong> {productDetail.generic}</p>
                    <p><strong>Dosage Form: </strong> {productDetail.dosage}</p>
                    <p><strong>TG Name:</strong> {productDetail.tg}</p>

                    <div>
                        <p><strong>{productDetail.q1}</strong></p>
                        <p>{productDetail.a1}</p>
                    </div>

                </div>

            </div>
            <div className='row'>
                <div className='col-12'>
                <p><strong>{productDetail.q2}</strong></p>
                <p>{productDetail.a2}</p>
                <p><strong>{productDetail.q3}</strong></p>
                <p>{productDetail.a3}</p>
                <p><strong>{productDetail.q4}</strong></p>
                <p>{productDetail.a4}</p>
                <p><strong>{productDetail.q5}</strong></p>
                <p>{productDetail.a5}</p>


                </div>

            </div>
            
        </div>
    );
};

export default AllProductsDetails;