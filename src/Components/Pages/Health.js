import React from 'react';

const Health = () => {
    return (
        <>
            <div className='container-fluid'>
                <div>
                    <img height='945' className='img-fluid' src="./img/About/health.jpg" alt="" />
                </div>

            </div>
            <div className='container w-75 m-auto mt-5 pt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <p className='pb-5 fs-1'><span className='border-bottom border-primary pb-3'>He</span>alth</p>


                    </div>
                    <div className='col-md-8'>
                        <p className='fs-5'>This section discusses causes, sign and symptoms, diagnosis, treatment, complications, precautions and preventions of specific health problems.</p>
                    </div>

                </div>

            </div>
            <div className='container-fluid bg-primary'>
                <div className='container pt-5 pb-5'>
                    <h1 className='fw-bold text-white fs-3'>Health & Wellness</h1>
                    <p className='text-white'>Life's all about staying healthy and enjoying the good things in life! However, illness is inevitable at all stages of life. In this area learn about the common health problems and how to deal with your and your family's illness.</p>
                    <h1 className='fw-bold text-white fs-3'>Beximco for Doctors</h1>
                    <p className='text-white'>Welcome to the registered Health Professionals, to this exclusive Doctors only area. This provides you access to latest medical updates, events, guidelines and information relevant to your practice. If you are not a registered doctor please do not enter this area.</p>
                </div>

            </div>
        </>
    );
};

export default Health;