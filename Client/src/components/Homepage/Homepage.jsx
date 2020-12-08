import React from 'react'
import { Link } from 'react-router-dom'
import Home from "../Assest/Rectangle 17.png";

import './style.css'

export default function Homepage() {
    return (
        <div>
            <div>
                <div className="main_container">
                    <div className="flex">
                        <div className="collection">
                            <ul>
                                <li>
                                    <img src="../Assest/+.png" className="plus" alt="" />
                                    CONNECT
                                </li>
                                <li>
                                    <img src="../Assest/+.png" className="plus" alt="" />
                                    COLLABORATE
                                </li>
                                <li>
                                    <img src="../Assest/+.png" className="plus" alt="" />
                                    CONVERGE
                                </li>
                            </ul>
                            <p>Bring your IDEAS to live with us.</p>
                            <div className="free">
                                <p>Signup for </p> <h5 className="blue"> Free </h5>
                            </div>
                            <div className="flex">
                                <input type="button" value="Freelancer" />
                                <input type="button" value="Client" />
                            </div>
                        </div>
                        <div className="img">
                            <img src={ Home } alt="" />
                        </div>
                    </div>
                    <div className="member">
                        <div className="flex">
                            <div className="blue">
                                <h4>2,28,490</h4>
                                <h4>COMMUNITY  MEMBERS </h4>
                            </div>
                            <div className="blue">
                                <h4>1,43,98,490</h4>
                                <h4>TOTAL POSTED JOBS</h4>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <h2>Let's stay in touch</h2>
                        <div className="flex">
                            <p>Keep me up to date with content, updates, offers from </p>
                            <h4 className="blue">VORKINSTA</h4>
                        </div>
                        <div className="flex">
                            <div className="custom-file-upload">
                                <input type="text" placeholder="Enter your email address" />
                                <input type="button" value="Subscribe" />
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}