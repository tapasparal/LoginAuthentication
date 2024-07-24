import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate = useNavigate();
    const [info, setInfo] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if (info.email === loggeduser.email && info.password === loggeduser.password) {
            navigate("/menu");
        } else {
            alert("Invalid login details");
        }
    }
    return (
        <>

            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={info.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" id="exampleInputPassword1" name="password" value={info.password} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>

        </>
    )
}
export default LoginForm