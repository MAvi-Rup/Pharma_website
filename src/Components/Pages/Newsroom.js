import React from 'react';

const Newsroom = () => {
    return (
        <>
            <div className='container-fluid'>
                <div>
                    <img height='945' className='img-fluid' src="./img/About/newsroom.jpg" alt="" />
                </div>

            </div>
            <div className='container w-75 m-auto mt-5 pt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <p className='pb-5 fs-1'><span className='border-bottom border-primary pb-3'>Ne</span>ws</p>


                    </div>
                    <div className='col-md-8'>
                        <p className='fs-5'>We are welcoming you to the News section of our website. We categorize this News section into three parts so that you can easily find your necessary information as well as your quest.</p>
                        <p className='fs-5'>Latest News, New Product Update and Investors’ Update, these three segments will serve the purpose of this section.</p>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Newsroom;