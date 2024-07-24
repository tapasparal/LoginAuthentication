import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        name: '',
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(info));
        navigate("/login");
    }
    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={info.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={info.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" id="exampleInputPassword1" name="password" value={info.password} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <div className="register-link">
                    <p>Have already an account? <Link to="login">Login Here</Link></p>
                </div>
            </form>

        </>
    )
}
export default Register
