import React, { useState } from "react";
import "./Login.css";
import { FaGooglePlusSquare, FaFacebookSquare, FaInstagramSquare, FaUser, FaKey } from 'react-icons/fa'


async function loginUser(credentials) {
    return fetch('http://localhost:8000/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(response => response.json());
}


function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
        window.location.href = '/';
    }

    return (
        <div className="d-flex justify-content-center h-100">
            <div className="card">
                <div className="card-header">
                    <h3>PlayGym</h3>
                    <div className="d-flex justify-content-end social_icon">
                        <span><i className="fab fa-facebook-square"><FaFacebookSquare /></i></span>
                        <span><i className="fab fa-google-plus-square"><FaGooglePlusSquare /></i></span>
                        <span><i className="fab fa-instagram-square"><FaInstagramSquare /></i></span>
                    </div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"><FaUser /></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="username" onChange={e => setUserName(e.target.value)} />

                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"><FaKey /></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder="password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="row align-items-center remember">
                            <input type="checkbox" />Remember Me
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Login" className="btn float-right login_btn" />
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                        Don't have an account?<a href="/signup">Sign Up</a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Login;
