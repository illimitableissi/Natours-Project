import React from 'react';
import '../iconStyles.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

const Features = () => {
    return (
        <div className="section-features"> 
            <Container>
                <Row>
                    <Col>
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-world"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                            <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel cupiditate quae obcaecati consequatur distinctio!.</p>
                    </div>
                    </Col>
                    <Col>
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-compass"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
                            <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel cupiditate quae obcaecati consequatur distinctio!.</p>
                    </div>
                    </Col>
                    <Col>
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-map"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
                            <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel cupiditate quae obcaecati consequatur distinctio!.</p>
                    </div>
                    </Col>
                    <Col>
                    <div className="feature-box">
                        <i className="feature-box__icon icon-basic-heart"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Live a happier life</h3>
                            <p className="feature-box__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel cupiditate quae obcaecati consequatur distinctio!.</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Features;