import React from 'react'
import "./Contact.css";

function Contact() {
    return (
        <div>
            <section className="section gray-bg" id="contactus">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>Contato</h2>
                                <p>Entre em contato caso necessario</p>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-md-7 col-lg-8 m-15px-tb">
                            <div className="contact-form">
                                <form action="/" method="post" className="contactform contact_form" id="contact_form">
                                    <div className="returnmessage valid-feedback p-15px-b" data-success="Your message has been received, We will contact you soon."></div>
                                    <div className="empty_notice invalid-feedback p-15px-b"><span>Por favor preencha os campos</span></div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="name" type="text" placeholder="Nome completo" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input id="email" type="text" placeholder="E-mail" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input id="subject" type="text" placeholder="Titulo" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea id="message" placeholder="Mensagem" className="form-control" rows="3"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="send">
                                                <a id="send_message" className="px-btn theme" href="#"><span>Enviar</span> <i className="arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-4 m-15px-tb">
                            <div className="contact-name">
                                <h5>E-mail</h5>
                                <p>info@teste.com</p>
                            </div>
                            <div className="contact-name">
                                <h5>Endereço</h5>
                                <p>Rua Jose Paulino, 33157 <br />  São Paulo - SP</p>
                            </div>
                            <div className="contact-name">
                                <h5>Telefone</h5>
                                <p>+55 11 32132568</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact;
