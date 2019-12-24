import React from 'react';


import Slider from '../components/slider/Slider';
import Social from '../components/social/Social';
import Latest from '../components/latest/Latest';
import Photos from '../components/photos/Photos';

const Home = () =>{
    return (
        <div>
            <Slider />
            <Social />
            <Latest />
            <Photos />
        </div>
    );
}

export default Home;