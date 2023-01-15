import React from 'react';

const Investors = () => {
    return (
        <>
         <div className='container-fluid'>
            <div>
                <img height='945' className='img-fluid' src="./img/About/investor.jpg" alt="" />
            </div>
            
         </div>
         <div className='container w-75 m-auto mt-5 pt-5'>
            <div className='row'>
                <div className='col-md-4'>
                <p className='pb-5 fs-1'>Investors <br/><span className='border-bottom border-primary pb-3'>Rel</span>ation</p>


                </div>
                <div className='col-md-8'>
                    <p className='fs-5'>This section contains important Company information including financial reports, corporate governance, stock exchange announcements and share / GDR holdings etc. for the investors. You can view and download the information of this section. The information are updated at periodic intervals.</p>
                </div>

            </div>

        </div>
        <div className='container mb-3 mt-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='ps-5 pe-5'>
                        <img width="238" src="https://www.beximcopharma.com/img/company-information.jpg" alt="" />
                        <h1 className='mb-3 mt-2 text-primary'>Company Information</h1>
                        <p>Contains a brief overview of the Company, its line of business, listing with stock exchange and important contact information.</p>
                        <a className='text-decoration-none' href="#">View Details <img src="https://www.beximcopharma.com/images/right-arrow.svg" alt="" /></a>

                    </div> 
                </div>
                <div className='col-md-4'>
                    <div className='ps-5 pe-5'>
                        <img width="238" src="https://beximco-pharma.com/cdn/bpl/img/company-documents.jpg" alt="" />
                        <h1 className='mb-3 mt-2 text-primary'>Company Documents</h1>
                        <p>Company’s constitutional documents i.e. Memorandum and Article of Association is available here. Additionally, the document relating to Placing and Admission of GDRs to AIM is also available in this section.</p>
                        <a className='text-decoration-none' href="#">View Details <img src="https://www.beximcopharma.com/images/right-arrow.svg" alt="" /></a>

                    </div> 
                </div>
                <div className='col-md-4'>
                    <div className='ps-5 pe-5'>
                        <img width="238" src="https://beximco-pharma.com/cdn/bpl/investor/Financial-Reports.jpg" alt="" />
                        <h1 className='mb-3 mt-2 text-primary'>Research & development</h1>
                        <p>This section contains Company’s Quarterly, Half Yearly, and Annual reports of different years.</p>
                        <a className='text-decoration-none' href="#">View Details <img src="https://www.beximcopharma.com/images/right-arrow.svg" alt="" /></a>

                    </div> 
                </div>
            </div>
        </div>
        </>
    );
};

export default Investors;