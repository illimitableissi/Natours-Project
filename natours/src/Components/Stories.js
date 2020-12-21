import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import img8 from '../img/nat-8.jpg'
import img9 from '../img/nat-9.jpg'
import vid1 from '../img/video.mp4'
import vid2 from '../img/video.webm'

const Stories = () => {
    return (
        <div className="section-stories">
            <div className="bg-video">
                <video className="bg-video__content" autoplay muted loop>
                    <source src={vid1} type="video/mp4"></source>
                    <source src={vid2} type="video/webm"></source>
                    Your browser is not supported!
                </video>
            </div>
            <Container>
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    We make people genuinely happy
                </h2>
            </div>
            <Row>
                <div className="story">
                    <figure className="story__shape">
                        <img src={img8} alt="person on a tour" className="story__img"></img>
                        <figcaption className="story__caption">
                            Mary Smith
                        </figcaption>
                    </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">I had a great weekend with my family</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel cupiditate quae obcaecati consequatur distinctio! Voluptas magnam incidunt eveniet laboriosam, porro dignissimos veritatis voluptatibus numquam harum sint accusantium, quasi est!</p>
                </div>
                </div>
            </Row>
            <br></br>
            <Row>
                <div className="story">
                    <figure className="story__shape">
                        <img src={img9} alt="person on a tour" className="story__img"></img>
                        <figcaption className="story__caption">
                            Jack Wilson
                        </figcaption>
                    </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">Wow, my life is completely different now!</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel cupiditate quae obcaecati consequatur distinctio! Voluptas magnam incidunt eveniet laboriosam, porro dignissimos veritatis voluptatibus numquam harum sint accusantium, quasi est!</p>
                </div>
                </div>
            </Row>
            <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn-text">Learn more -{">"}</a>
            </div>
            </Container>
        </div>
    );
};

export default Stories;