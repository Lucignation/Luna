import React from 'react';

import {Container, Row, Col, Image} from 'react-bootstrap';

import MyImgOne from '../../public/images/Luna (1).jpeg';
import MyImgTwo from '../../public/images/Luna (2).jpeg';
import MyImgThree from '../../public/images/Luna (3).jpeg';
import MyImgFour from '../../public/images/Luna (4).jpeg';
import MyImgFive from '../../public/images/Luna (5).jpeg';
import MyImgSix from '../../public/images/Luna (6).jpeg';
import MyImgSeven from '../../public/images/Luna (10).jpeg';
import MyImgEight from '../../public/images/Luna (8).jpeg';
import MyImgNine from '../../public/images/Luna (11).jpeg';
import MyImgTen from '../../public/images/Luna (12).jpeg';
import MyImgThirteen from '../../public/images/Luna (19).jpeg';
import MyImgFourteen from '../../public/images/Luna (16).jpeg';
import MyImgFifteen from '../../public/images/Luna (17).jpeg';
import MyImgSixteen from '../../public/images/Luna (18).jpeg';
import MyImgEighteen from '../../public/images/Luna (21).jpeg';
import MyImgTwenty from '../../public/images/Luna (23).jpeg';
import MyImgTwentyOne from '../../public/images/Luna (24).jpeg';
import MyImgTwentyTwo from '../../public/images/Luna (26).jpeg';

import './Gallery.css';

const Gallery = () =>{
    return(
        <div className="Gallery">
            <h1>Photos</h1>
            <hr/>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={MyImgOne} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgTwo} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgThree} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgFour} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgFive} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgSix} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgSeven} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgEight} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgNine} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgTen} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgThirteen} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgFourteen} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgFifteen} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgEighteen} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgSixteen} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgTwenty} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgTwentyOne} thumbnail />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={MyImgTwentyTwo} thumbnail />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Gallery;