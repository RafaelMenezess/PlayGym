import React, { useState } from "react";
import "./Signup.css";
import { FaMailBulk, FaUser, FaHouseUser, FaIdCard, FaKey, FaBirthdayCake } from 'react-icons/fa'


async function registerUser(body) {
    return fetch('http://localhost:8000/api/register/student', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}


function SignUp() {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [first_name, setName] = useState();
    const [last_name, setLastname] = useState();
    const [password1, setPassword] = useState();
    const [password2, setPassword2] = useState();
    const [birthday, setBirthday] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await registerUser({
            email,
            username,
            cpf,
            rg,
            first_name,
            last_name,
            password1,
            password2,
            birthday
        });
        const json = await response.json();
        if (!response.ok) {
            alert(JSON.stringify(json));
        }
        alert("Cadastrado como sucesso.");
        window.location.href = '/';
    }

    return (
        <div className="d-flex justify-content-center h-100">
            <div className="card-signup">
                <div className="card-header">
                    <h3>Sign Up PlayGym</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-mail-bulk"><FaMailBulk /></i></span>
                            </div>
                            <input type="email" className="form-control" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-user"><FaHouseUser /></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-address-card"><FaIdCard /></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="CPF" onChange={e => setCpf(e.target.value)} />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-address-card"><FaIdCard /></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="RG" onChange={e => setRg(e.target.value)} />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-cg-rename"><FaUser /></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Name" onChange={e => setName(e.target.value)} />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-cg-rename"><FaUser /></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Lastname" onChange={e => setLastname(e.target.value)} />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"><FaKey /></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"><FaKey /></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password Confirm" onChange={e => setPassword2(e.target.value)} />
                        </div>
                        <div className="input-group form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-key"><FaBirthdayCake /></i></span>
                            </div>
                            <input type="date" className="form-control" placeholder="Birthday" onChange={e => setBirthday(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Register" className="btn float-right login_btn" />
                        </div>
                    </form>
                </div>
                <div className="card-footer">
                </div>
            </div>
        </div >
    )
}
export default SignUp;
