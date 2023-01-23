import React from 'react';

const ContactUs = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <p className='pb-5 fs-1'><span className='border-bottom border-primary pb-3'>Our</span> Story</p>
                    <h1>Operational Headquarters</h1>
                    <span>Beximco Pharmaceuticals Ltd.</span> <br />
                    <span>19 Dhanmondi R/A Road No. 7 Dhaka 1205 Bangladesh.</span> <br />
                    <span className='fa fa-phone'><span className='fw-light'>  +880-2-58611001-7</span></span> <br />
                    <span className='fa fa-fax'><span className='fw-light'>  +880-2-58613888, +880-2-58614601</span></span> <br />
                    <span className='fa fa-envelope'><span className='fw-light'> info@bpl.net</span></span> <br />

                    <p className='fw-light fs-4 mt-3 mb-3'>The Safety of our products and health & well-being of our patients continues to be our Highest Priority. For Medical Information, Product Complaint or Reporting of an Adverse Event involving Beximco Pharma Product please contact:</p>

                </div>

            </div>
            <div className='row mt-5 mb-5'>
                <div className='col-md-6'>
                    <h1>In the United States:</h1>
                    <span className='fa fa-phone'><span className='fw-light'>  (877) 372-6093 (Monday – Friday 8am – 6pm Central Time GMT-6)</span></span> <br />
                    <span className='fa fa-fax'><span className='fw-light'>  (866) 578-4617</span></span> <br />
                    <span className='fa fa-envelope'><span className='fw-light'>  DrugSafety@propharmagroup.com</span></span> <br />

                </div>
                <div className='col-md-6'>
                    <h1>Outside the United States:</h1>
                    <span className='fa fa-phone'><span className='fw-light'>  +8802-223364449</span></span> <br />
                    <span className='fa fa-fax'><span className='fw-light'>  +8802-223364449</span></span> <br />
                    <span className='fa fa-envelope'><span className='fw-light'>  pharmacovigilance@bpl.net</span></span> <br />

                </div>

            </div>
            <div className='row'>
                <h1 className='fs-4 text-white bg-primary pt-2 pb-2'>Contact Form</h1>
                <form>
                <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Subject</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Query</label>
                        <textarea type="text" class="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>

        </div>
    );
};

export default ContactUs;