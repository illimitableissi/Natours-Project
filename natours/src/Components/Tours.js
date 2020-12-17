import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Tours = () => {
    return (
        <div className="section-tours">
        <Container>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Most popular tours
                </h2>
            </div>
            <Row>
                <Col>
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1"> The Sea Explorer</span>
                            </h4>
                            <div className="card__details">
                                <ul>
                                    <li>3 day tour</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>     
                            </div>
                        <div className="card__side card__side--back card__side--back-1">  
                            Back    
                        </div>
                    </div>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Tours;