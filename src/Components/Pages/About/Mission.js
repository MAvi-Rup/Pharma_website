import React from 'react';

const Mission = () => {
    return (
        <>
            <div className='container-fluid pt-5 pb-5' style={{
                backgroundImage: `url("https://i.ibb.co/LhgqCQM/mission.jpg")`,height:'100vh',
                marginTop:'-70px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className='container pt-5 pb-5'>
                    <div className='row'>
                        <div className='col-md-6 pt-5 mt-5'>
                            <p className='pb-5 text-white fs-1 pt-4'><span className='border-bottom border-light pb-3'>Our</span> Mission</p>
                            <p className='text-white fs-5 pt-4'>We are committed to enhancing human health and well being by providing contemporary and affordable medicines, manufactured in full compliance with global quality standards. We continually strive to improve our core capabilities to address the unmet medical needs of the patients and to deliver outstanding results for our shareholders.</p>

                        </div>
                    </div>
                </div>

            </div>
            <div className='container mt-5 pt-5'>
            <div className='row'>
                <div className='col-md-12'>
                <h1 className='pb-5'><span className='border-bottom border-primary pb-3'>Our</span> Vision</h1>


                </div>
                <div className='col-md-12 fs-4'>
                We will be one of the most trusted, admired and successful pharmaceutical companies in the region with a focus on strengthening research and development capabilities, creating partnerships and building presence across the globe.

                </div>

            </div>

        </div>

        </>
    );
};

export default Mission;