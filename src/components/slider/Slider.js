import React from 'react';

import SliderOne from '../../public/images/DONCASINO1.jpg';
import SliderTwo from '../../public/images/DONCASINO2.jpg';
import SliderThree from '../../public/images/DONCASINO3.jpg';

import {Carousel} from 'react-bootstrap';

const Slider = () =>{
    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={SliderOne}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={SliderTwo}
                    alt="Third slide"
                    />

                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={SliderThree}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;