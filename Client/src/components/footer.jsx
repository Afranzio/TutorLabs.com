import React from 'react'
import './style.css'

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <ul>
                    <li>Terms and Conditions</li>
                    <li>|</li>
                    <li>Privacy Policy</li>
                    <li>|</li>
                    <li>Help</li>
                    <li>|</li>
                    <li>Vorkinsta Licenses</li>
                    <li>|</li>
                    <li>Partners</li>
                    <li>|</li>
                    <li className="flex">
                        <label>Language</label>
                        <h4 id="Lang">English</h4>
                    </li>
                </ul>
            </div>
        </div>
    )
}
