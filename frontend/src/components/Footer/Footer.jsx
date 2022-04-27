import React, { useState } from 'react'
import { FaFacebookSquare, FaGooglePlusSquare, FaInstagramSquare } from 'react-icons/fa'

function Footer() {
    function useHover(styleOnHover, styleOnNotHover = { color: '#FFC312' }) {
        const [style, setStyle] = React.useState(styleOnNotHover);

        const onMouseEnter = () => setStyle(styleOnHover)
        const onMouseLeave = () => setStyle(styleOnNotHover)

        return { style, onMouseEnter, onMouseLeave }
    }
    const hover = useHover({ color: "white" })
    const hover2 = useHover({ color: "white" })
    const hover3 = useHover({ color: "white" })

    return (
        <footer class="bg-dark text-center text-white">
            <div class="container p-4 pb-0">
                <section class="mb-0">
                    <div class="d-flex-center" style={{
                        fontSize: '40px',
                        padding: '0px',
                        marginLeft: '15px',
                        color: '#FFC312 !important',
                        a: { color: '#FFC312 !important' }
                    }}>
                        <span style={{ padding: '5px' }}>
                            <a href=''  {...hover}><i className="fab fa-facebook-square"><FaFacebookSquare /></i></a>
                        </span>
                        <span style={{ padding: '5px' }}>
                            <a href=''  {...hover2}><i className="fab fa-google-plus-square"><FaGooglePlusSquare /></i></a>
                        </span>
                        <span style={{ padding: '5px' }}>
                            <a href=''  {...hover3}><i className="fab fa-instagram-square"><FaInstagramSquare /></i></a>
                        </span>
                    </div>
                </section>
            </div >
            <div class="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2022 Copyright:
                <a class="text-white" href="/"> PlayGym.com.br</a>
            </div>
        </footer >
    );
}
export default Footer;
