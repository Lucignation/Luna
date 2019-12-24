import React from 'react';

import { CardDeck, Card} from 'react-bootstrap';

import LaRue from '../../public/images/Luna (18).jpeg';
import Supreme from '../../public/images/Luna (11).jpeg';
import Brutal from '../../public/images/Luna (3).jpeg';

import './Music.css';

const Music = () =>{
    return (
        <div className="Music">
            <h1>Stream Music</h1>
            <hr/>
            <div>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={LaRue} />
                    <Card.Body>
                    <Card.Title>La Rue</Card.Title>
                    <Card.Text>
                        The mixtape off the first album. This jam went platnum on the first day of its release.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><a href="#iTunes">Listen on iTunes</a></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Supreme} />
                    <Card.Body>
                    <Card.Title>Supreme</Card.Title>
                    <Card.Text>
                        The street went wide for this one, and we got great artists featured on this one.
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><a href="#iTunes">Listen on iTunes</a></small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Brutal} />
                    <Card.Body>
                    <Card.Title>Brutal</Card.Title>
                    <Card.Text>
                        We kill'em with success when they call us bad influence to the youth. 
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted"><a href="#iTunes">Listen on iTunes</a></small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            </div>
        </div>
    );
}

export default Music;