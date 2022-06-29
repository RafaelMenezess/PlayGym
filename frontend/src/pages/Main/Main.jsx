import React from 'react'
import { Carousel } from 'react-bootstrap';
import { BsChatLeftTextFill, BsExclamationTriangleFill, BsFillCalendar2RangeFill } from 'react-icons/bs'
import "./Main.css";

function Main() {
    return (
        <div className='carousel-div'>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../../../src/assets/images/banner.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require("../../../src/assets/images/banner2.jpg")}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div class="b-example-divider"></div>
            <div className='front-board'>
                <div class="container px-4 py-5" id="hanging-icons">
                    <h2 class="pb-2 border-bottom">Informações</h2>
                    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
                        <div class="col d-flex align-items-start">
                            <div class="icon-square text-white d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <BsChatLeftTextFill />
                            </div>
                            <div>
                                <h2>Noticias</h2>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            </div>
                        </div>
                        <div class="col d-flex align-items-start">
                            <div class="icon-square text-white d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <BsExclamationTriangleFill />
                            </div>
                            <div>
                                <h2>Avisos</h2>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            </div>
                        </div>
                        <div class="col d-flex align-items-start">
                            <div class="icon-square text-white d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                                <BsFillCalendar2RangeFill />
                            </div>
                            <div>
                                <h2>Agenda</h2>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;
