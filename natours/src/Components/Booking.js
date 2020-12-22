import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

const Booking = () => {
    return (
        <div className="section-book">
            <Container>
                <Row>
                    <div className="book">
                        <div className="book__form">
                            <form action="#" className="form">
                                <div className="form_group">
                                    <input type="text" className="form__input" placeholder="Full Name" in="name" required></input>
                                    <label for="name" className="form__label">Full name</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </Row> 
            </Container>
        </div>
    );
};

export default Booking;