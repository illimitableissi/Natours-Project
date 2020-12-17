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
                            Front    
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