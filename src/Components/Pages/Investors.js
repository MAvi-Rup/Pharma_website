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
        <div className='container-fluid bg-primary pt-5 pb-5 mt-5'>
            <div className='row w-75 m-auto'>
                <div className='col-md-8 pt-5 pb-5'>
                    <img className='img-fluid' src="./img/director.jpg" width='545' alt="" />
                     
                </div>
                <div className='col-md-4 pt-5 pb-5'>
                <p className='pb-5 fs-1 text-white'>Board of <br/><span className='border-bottom border-white pb-3'>Direc</span>tors</p>
                <p className='fs-5 text-white'>Provides biographical details of the members of the Board of Directors including Independent Directors.</p>

                <button className='btn pt-2 pb-2 bg-white text-primary'>Board of Directors <img src="https://www.beximcopharma.com/images/right-arrow.svg" alt="" /></button>


                </div>

            </div>


        </div>
        </>
    );
};

export default Investors;