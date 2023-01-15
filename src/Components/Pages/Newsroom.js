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
            <div className='container mb-3 mt-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='ps-5 pe-5'>
                        <img width="238" src="https://beximco-pharma.com/cdn/bpl/images/News-Announcement.jpg" alt="" />
                        <h1 className='mb-3 mt-2 text-primary'>Latest News</h1>
                        <p>Beximco Pharmaceuticals Limited (“BPL” or “Company”; AIM Symbol: BXP), the fast-growing manufacturer of generic pharmaceutical products and active pharmaceutical ingredients.</p>
                        <a className='text-decoration-none' href="#">View Details <img src="https://www.beximcopharma.com/images/right-arrow.svg" alt="" /></a>

                    </div> 
                </div>
                <div className='col-md-4'>
                    <div className='ps-5 pe-5'>
                        <img width="238" src="https://beximco-pharma.com/cdn/bpl/images/tablet-capsules.jpg" alt="" />
                        <h1 className='mb-3 mt-2 text-primary'>New Product Update</h1>
                        <p>Beximco Pharmaceuticals Limited launched new products.</p>
                        <a className='text-decoration-none' href="#">View Details <img src="https://www.beximcopharma.com/images/right-arrow.svg" alt="" /></a>

                    </div> 
                </div>
                <div className='col-md-4'>
                    <div className='ps-5 pe-5'>
                        <img width="238" src="https://beximco-pharma.com/cdn/bpl/img/social-media-h.jpg" alt="" />
                        <h1 className='mb-3 mt-2 text-primary'>Social Media</h1>
                        <p>Beximco Pharma page delivers various news and features of company like social responsibility, new product launching and events.</p>
                        <a className='text-decoration-none' href="#">View Details <img src="https://www.beximcopharma.com/images/right-arrow.svg" alt="" /></a>

                    </div> 
                </div>
            </div>
        </div>
        </>
    );
};

export default Newsroom;