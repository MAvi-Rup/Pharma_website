import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5001/specialProducts/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    },[id])
    // {console.log(typeof(product.para))}
    // let newString= product.para.replace(/\\n/g, '<br>\n')
    // const string = String(product.para)
    return (
        <div className='container w-75 m-auto mt-5 ps-5 pe-5 mb-5'>
            
            <div className='row'>
                <div className='col-md-4'>
                    <h1>{product.title}</h1>

                </div>
                <div className='col-md-8'>
                    <p>{product.para}</p>

                </div>

            </div>
        </div>
    );
};

export default ProductDetails;

//