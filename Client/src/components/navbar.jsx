import React from 'react'
import insta from './Assest/O R K I N S T A.png'
import build from './Assest/WE BUILD ENTREPRENEURS.png'
import logo from './Assest/Rectangle 24.png'
import {Link} from 'react-router-dom'

import './style.css'
import './Homepage/style.css'

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="logos">
                    <img className="logo" src={logo} alt="" />
                    <div className="brand">
                        <img src={insta} alt="" />
                        <img src={build} alt="" />
                    </div>
                </div>
                <div className="label">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>My Jobs</a></li>
                        <li><a>Reports</a></li>
                        <li><a>Messages</a></li>
                        <li>
                            <a href="/login"><input type="button" value="Login" /></a>
                        </li>
                        <li>
                            <a href="/signup"><input type="button" value="Signup" /></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
