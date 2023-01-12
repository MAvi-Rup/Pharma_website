import React from 'react';
import Carousel from '../Carousel';
import AllProducts from './AllProducts';
import Event from './Event';
import Global from './Global';
import OurOrigin from './OurOrigin';
import Research from './Research';
import SpecialProducts from './SpecialProducts';

const Home = () => {
    return (
        <div>
            <Carousel />
            <OurOrigin />
            <SpecialProducts />
            <Research />
            <Event />
            <AllProducts />
            <Global />
            
        </div>
    );
};

export default Home;