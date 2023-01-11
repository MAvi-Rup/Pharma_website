import React from 'react';
import Carousel from '../Carousel';
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
            <Global />
        </div>
    );
};

export default Home;