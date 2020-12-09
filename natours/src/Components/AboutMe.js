import React from 'react';
import '../sass/main.sass';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const AboutMe = () => {
    return (
        <div className="section-about"> 
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Exciting tours for adventurous people.
                </h2>
            </div>
            <Row>
                <Col>
                    <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel cupiditate quae obcaecati consequatur distinctio! Voluptas magnam incidunt eveniet laboriosam, porro dignissimos veritatis voluptatibus numquam harum sint accusantium, quasi est!</p>
                    <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                    <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel cupiditate quae obcaecati consequatur distinctio! Voluptas magnam incidunt eveniet laboriosam</p>
                    <a href="#" className="btn-text">Learn more -{">"}</a>
                </Col>
                <Col>
                    Image composition
                </Col>
            </Row>
        </div>
    );
};

export default AboutMe;