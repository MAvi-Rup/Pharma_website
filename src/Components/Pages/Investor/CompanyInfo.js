import React from 'react';

const CompanyInfo = () => {
    return (
        <div>
            <div className='container w-75 m-auto'>
                <div className='row'>
                    <div className='col-md-12'>
                        <p className='pb-5 fs-1'><span className='border-bottom border-primary pb-3'>Com</span>pany Relation</p>
                        <h1 className='text-primary'>The Company</h1>
                        <table class="table table-hover">
                            {/* <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                <tr>
                                    <td>
                                        Year of Incorporation
                                    </td>
                                    <td>1976</td>
                                </tr>
                                <tr>
                                    <td>Legal Status</td>
                                    <td>	Public Limited Company</td>
                                </tr>
                                <tr>
                                    <td>Country of Incorporation</td>
                                    <td>Bangladesh</td>
                                </tr>
                                <tr>
                                    <td>Main Country of Operation</td>
                                    <td>Bangladesh</td>
                                </tr>
                                <tr>
                                    <td>Line of Business</td>
                                    <td><ul><li>Manufacturing, Marketing & Distribution of Generic Pharmaceutical Formulation Products and Active Pharmaceutical Ingredients (APIs)</li><li>Contract Manufacturing Services</li></ul></td>
                                </tr>
                                <tr>
                                    <td>Operational Headquarters</td>
                                    <td>19 Dhanmondi R/A, Road No. 7, Dhaka- 1205, Bangladesh</td>
                                </tr>
                            </tbody>
                        </table>
                        <h1 className='text-primary mt-5'>Stock Exchange Listings</h1>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Exchanges Listed</th>
                                    <th scope="col">Year of Listing</th>
                                    <th scope="col">Trading Code</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                    Dhaka Stock Exchange Ltd (DSE)
                                    </td>
                                    <td>1985</td>
                                    <td>BXPHARMA</td>
                                </tr>
                                <tr>
                                    <td>Chattogram Stock Exchange Ltd (CSE)</td>
                                    <td>1995</td>
                                    <td>BXPHARMA</td>
                                </tr>
                                <tr>
                                    <td>AIM of London Stock Exchange (LSE)</td>
                                    <td>2005</td>
                                    <td>BXP</td>
                                </tr>
                            </tbody>
                        </table>


                    </div>

                </div>

            </div>
        </div>
    );
};

export default CompanyInfo;