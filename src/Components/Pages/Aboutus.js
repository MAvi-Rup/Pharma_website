import React from 'react';

const Aboutus = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 bg-primary d-flex align-items-center justify-content-end'>
                        <h1 className='pb-5 text-white'><span className='border-bottom border-light pb-3'>Ab</span>out US</h1>
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src="./img/About/about.jpg" alt="" />

                    </div>

                </div>
            </div>
            <div className='container w-75 m-auto mt-5 pt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                    <h1 className='pb-5'><span className='border-bottom border-primary pb-3'>Our</span> Story</h1>


                    </div>
                    <div className='col-md-8'>
                        <p className='fs-5'>Beximco Pharmaceuticals Limited is a leading manufacturer and exporter of medicines in Bangladesh. Incorporated in 1976, the Company started its operation by importing products from Bayer, Germany and Upjohn, USA and selling them in the local market. In 1980, Beximco Pharma began manufacturing of these products under licensing arrangement and the company launched its own formulation brands in 1983. From that humble beginning, Beximco Pharma has grown from strength to strength. Today, it has emerged as a global generic pharma company in the region. The Company’s manufacturing facilities have been accredited by the leading global regulatory authorities, and medicines manufactured by the Company are now being exported to more than 50 countries including the highly regulated markets of USA, Europe, Canada and Australia. Beximco has won the National Export (Gold) trophy for 5 times. It remains the only Company in the country to win the highly prestigious SCRIP Award as the “Best Pharma Company in an Emerging Market” and also won CPhI Pharma Awards 2020 for “Innovation in Response to COVID-19.” It also has the unique distinction as the only Bangladeshi Company listed on the AIM of London Stock Exchange.</p>
                        <p className='fs-5'>In 2018, Beximco Pharma acquired a majority stake in Nuvista Pharma (formerly Organon Bangladesh), a leading hormone and steroid manufacturer in the country.</p>
                        <p className='fs-5'>The Company currently employs more than 4,700 employees including pharmacists, doctors, engineers, chemists, microbiologists, accountants, business graduates and other white collar professionals.</p>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Aboutus;