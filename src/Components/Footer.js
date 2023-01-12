import React from 'react';

const Footer = () => {
    return (
        <>
        <div>
            <div class="container-fluid mt-5" style={{backgroundColor: '#3f51b5'}}>
                <footer class="text-center text-white" >
                    <div class="container">
                        <section class="mt-5">
                            <div class="row text-center d-flex justify-content-center pt-5">
                                <div class="col-md-2">
                                    <h6 class="text-uppercase font-weight-bold">
                                        <a href="#!" class="text-white">About us</a>
                                    </h6>
                                </div>
                                <div class="col-md-2">
                                    <h6 class="text-uppercase font-weight-bold">
                                        <a href="#!" class="text-white">Products</a>
                                    </h6>
                                </div>
                                <div class="col-md-2">
                                    <h6 class="text-uppercase font-weight-bold">
                                        <a href="#!" class="text-white">Contact Us</a>
                                    </h6>
                                </div>
                                <div class="col-md-2">
                                    <h6 class="text-uppercase font-weight-bold">
                                        <a href="#!" class="text-white">Investor</a>
                                    </h6>
                                </div>
                                <div class="col-md-2">
                                    <h6 class="text-uppercase font-weight-bold">
                                        <a href="#!" class="text-white">Newsroom</a>
                                    </h6>
                                </div>

                            </div>

                        </section>


                        <hr class="my-5" />


                        <section class="mb-5">
                            <div class="row d-flex justify-content-center">
                                <div class="col-lg-8">
                                    <p>
                                    Beximco Pharmaceuticals Ltd. (Beximco Pharma) is an emerging generic drug player committed to providing access to affordable medicines. Company’s state-of-the-art manufacturing facilities have been accredited by the regulatory authorities of USA, Australia, European Union, Canada, and Brazil, among others, and it currently focuses on building presence in many emerging and developed markets around the world.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section class="text-center mb-5">
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="" class="text-white me-4">
                                <i class="fab fa-google"></i>
                            </a>
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-github"></i>
                            </a>
                        </section>
                    </div>
                    <div
                        class="text-center p-3"
                        style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
                    >
                        © 2020 Copyright:
                        {/* <a class="text-white" href="https://mdbootstrap.com/"
                        >MDBootstrap.com</a> */}
                        
                    </div>

                </footer>

            </div>

        </div>
        </>
    );
};

export default Footer;