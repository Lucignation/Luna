import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Latest.css';

const Latest = () =>{
    return (
        <div className="Latest" id="video">
            <h1>Latest Video</h1>
            <hr />
            <Container>
                <Row>
                    <Col sm={8}>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/_HOza7-daHM" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen title="TheRingBirmingham"></iframe>
                    </Col>
                    <Col sm={4}>
                        <h4>The Ring Birmingham - Legide FT Don Casino</h4>
                        <p><em>
                        Preorder Black Panther The Album http://smarturl.it/BlackPantherAlbum Directed by Dave Meyers & the little homies Black Panther The Album Music From And Inspired By Album on All Digital Platforms & In Stores 2/9 Music video by Kendrick Lamar, SZA performing All The Stars. (C) 2019 Aftermath Records http://vevo.ly/nzzt7e
                        </em>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Latest;