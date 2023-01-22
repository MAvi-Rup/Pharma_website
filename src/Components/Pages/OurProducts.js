import React from 'react';
import SearchProducts from './Products/SearchProducts';

const OurProducts = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 bg-primary d-flex align-items-center justify-content-end'>
                        <h1 className='pb-5 text-white'><span className='border-bottom border-light pb-3'>Pro</span>ducts</h1>
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src="./img/About/product.jpg" alt="" />

                    </div>

                </div>
            </div>
            <div className='container w-75 m-auto mt-5 pt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1 className='pb-5'><span className='border-bottom border-primary pb-3'>Our</span> Story</h1>


                    </div>
                    <div className='col-md-8'>
                        <p className='fs-5'>Beximco Pharma currently produces more than 300 generic medicines which are available in well over 500 different presentations and the broad portfolio encompasses all key therapeutic categories including antibiotics, analgesics, anti-diabetic, respiratory, cardiovascular, central nervous system, dermatology, gastrointestinal etc.</p>
                        <p className='fs-5'>Many of its brands remain consistent leaders in their respective therapeutic categories and the company continuously reviews and expands this portfolio in order to ensure that people have access to newer generics, and better treatment options at affordable cost.</p>
                        <p className='fs-5 fw-bold'>With our diverse product range, we are able to respond to the increasing needs of physicians, patients, and health care providers -- both therapeutically and economically.</p>

                    </div>

                </div>

            </div>
            <div className='container w-75 m-auto mt-5'>
                <div className='row'>
                    <div className='col-12'>
                        <p className='pb-5 fs-1'><span className='border-bottom border-primary pb-3'>Bexim</span>mco Brands</p>
                    </div>
                    <SearchProducts />

                </div>

            </div>
        </>
    );
};

export default OurProducts;