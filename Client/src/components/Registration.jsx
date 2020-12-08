import React, {useState} from 'react'
import { signUp } from '../Actions/service'

import './Registration/style.css'

export default function Registration() {

    const[email,setEmail] = useState("");
    const[pwd,setPwd] = useState("");
    const[confrimpwd,setConfrimpwd] = useState("");
    const[role,setRole] = useState("");
    const[name,setName] = useState("");

    const reg = {
        "emailId": email,
        "profileId": role,
        "userName": name,   
        "userPassword": pwd,
        "confirmPassword": confrimpwd
    }

    const signup = () => {
        signUp(reg)
    }

    return (
        <div>
            <div className="main-container">
                <div className="left-side">
                    <h6 className="register">REGISTRATION</h6> 
                    <div className="center">
                        <h5>
                            Let's get you Started...
                        </h5>
                        <h6>Fill your registration form and start your journey with us</h6>
                    </div>
                </div>
                <div className="right-side">
                    <div className="blue title">
                        <h4><strong>Register Free Account</strong></h4>
                        <h6>or use following methods</h6>
                    </div>
                    <form action="submit">
                        <div className="flex-SB">
                            <img src="../Assest/google-button.png" alt="" />
                            <img src="../Assest/facebook-button.png" alt="" />
                        </div>
                        <div className="flex">
                            <span>Already have an account? </span> <p><a href="/login">Login</a></p>
                        </div>
                        <div className="form-inputs">
                            <label>Username</label>
                            <input type="email" 
                            name="email" 
                            id="name" 
                            value={name}
                            onChange = {(event) => setName(event.target.value)}
                            placeholder="Eg: Brad" />
                        </div>
                        <div className="form-inputs">
                            <label>Please enter a vaild email address</label>
                            <input type="email" 
                            name="email" 
                            id="email" 
                            value={email}
                            onChange = {(event) => setEmail(event.target.value)}
                            placeholder="Eg: jhon@xyz.com" />
                        </div>
                        <div className="form-inputs">
                            <label>Enter Password</label>
                            <input type="password" 
                            name="email" 
                            id="pwd"
                            value={pwd}
                            onChange = {(event) => setPwd(event.target.value)} />
                        </div>
                        <div className="form-inputs">
                            <label>Confrim Password</label>
                            <input type="password" 
                            name="email" 
                            value={confrimpwd}
                            onChange = {(event) => setConfrimpwd(event.target.value)}
                            id="confrimpwd" />
                        </div>
                        <div className="form-inputs">
                            <label>Please select your account type</label>
                            <div className="flex">
                                <div className="flex">
                                    <input type="radio" 
                                    onChange={()=>{setRole(1)}}
                                    name="acc" 
                                    id="acc" /><h6>Client</h6>
                                </div>
                                <div className="flex">
                                    <input type="radio" 
                                    onChange={()=>{setRole(2)}}
                                    name="acc" 
                                    id="accs" /><h6>Freelancer</h6>
                                </div>
                            </div>
                        </div>
                        <img src="../Assest/" alt="" />
                    </form>
                    <div className="buttons">
                         <a href="/create"> <input type="button" value="Signup" onClick={signup} /> </a>
                    </div>
                    <p className="note">By registering you confrim that you accept the <a href="">Terms an Condition</a>  and <a href="">Privacy Policy</a> </p>
                </div>
            </div>
        </div>
    )
}
