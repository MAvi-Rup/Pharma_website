import React from 'react';

const OurPeople = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6 bg-primary d-flex align-items-center justify-content-end'>
                        <h1 className='pb-5 text-white'><span className='border-bottom border-light pb-3'>Ab</span>out US</h1>
                    </div>
                    <div className='col-md-6'>
                        <img className='img-fluid' src="./img/our-people.jpg" alt="" />

                    </div>

                </div>
            </div>
            <div className='container w-75 m-auto mt-5 pt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                    <h1 className='pb-5'><span className='border-bottom border-primary pb-3'>Our</span> People</h1>


                    </div>
                    <div className='col-md-8'>
                        <p className='fs-5'>BPL has a dynamic team of over 4,700 people who are the driving force behind its progress. Our devoted and highly competent people are our key resource to accomplish our mission and consistently remain at the centre of our strategy. We recognize it is our people’s resolute efforts that have driven us to a greater height over the years. Currently, our strong pool of expertise includes over 1,500 professionals such as pharmacists, chemists, doctors, engineers, microbiologists, researchers, and business graduates.</p>
                        <p className='fs-5'>At Beximco Pharma, we endeavour to create, promote and sustain an inclusive, high performing and diversified culture for our employees to promote empowerment and encourage innovation. We emphasize on enhancing capacity, strengthening skills, and enabling their success, both individually and collectively.</p>
                        
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OurPeople;