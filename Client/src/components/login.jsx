import React, {useState} from 'react'
import { login } from '../Actions/service'

import './LoginPage/style.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = () => {
        return login(
            {"userName" : email,
            "password" : password}
            )      
    }

    return (
        <div>
            <div className="main-container">
                <div className="left-side">
                    <h6 className="register">Login</h6> 
                    <div className="center">
                        <h5>
                            Let's get you Working...
                        </h5>
                        <h6>Please login to start working</h6>
                    </div>
                </div>
                <div className="right-side">
                    <div className="blue title">
                        <h4><strong>Login</strong></h4>
                        <h6>or use following methods</h6>
                    </div>
                    <form action="submit">
                        <div className="flex-SB">
                            <img src="../Assest/google-button.png" alt="" />
                            <img src="../Assest/facebook-button.png" alt="" />
                        </div>
                        <div className="flex check">
                            <span>New to </span> <span className="blue">VorkInsta ?</span> <p><a href="/signup">Register</a></p>
                        </div>
                        <div className="form-inputs">
                            <input type="email"
                             name="email" 
                             id="email" 
                             value = {email}
                             onChange = {(event) => setEmail(event.target.value)}
                             placeholder="Username or Email" />
                        </div>
                        <div className="form-inputs">
                            <input type="password" 
                            name="pwd" 
                            id="pwd" 
                            value = {password}
                            onChange = {(event) => setPassword(event.target.value)}
                            placeholder="Password" />
                        </div>
                    </form>
                    <a href="/forgotpwd" className="blue forgot">Forgot Password ?</a>
                    <div className="buttons">
                        <input type="button" value="Login" onClick={loginUser} />
                    </div>
                </div>
            </div>
        </div>
    )
}
