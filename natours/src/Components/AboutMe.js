import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import img1 from '../img/nat-1-large.jpg'
import img2 from '../img/nat-2-large.jpg'
import img3 from '../img/nat-3-large.jpg'


const AboutMe = () => {
    return (
        <div className="section-about">
            <Container>
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
                    <div className="composition">
                        <Image src={img1} alt="Photo 1" className="composition__photo composition__photo--p1"></Image>
                        <Image src={img2} alt="Photo 2" className="composition__photo composition__photo--p2"></Image>
                        <Image src={img3} alt="Photo 3" className="composition__photo composition__photo--p3"></Image>
                    </div>
                </Col>
            </Row>
            </Container> 
        </div>
    );
};

export default AboutMe;