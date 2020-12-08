import React from 'react'
import './style.css'

export default function FreelacerProfile() {
    return (
        <div>
            <nav>
                <div className="logos">
                    <img className="logo" src="../Assest/Rectangle 24.png" alt="" />
                    <div className="brand">
                        <img src="../Assest/O R K I N S T A.png" alt="" />
                        <img src="../Assest/WE BUILD ENTREPRENEURS.png" alt="" />
                    </div>
                </div>
                <div className="label">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>My Jobs</a></li>
                        <li><a>Reports</a></li>
                        <li><a>Contact</a></li>
                        <li><img src="../Assest/generic-avatar 3.png" alt="" /></li>
                    </ul>
                </div>
            </nav>
            <div className="main-container">
                <div className="left-side">
                    <img className="uploadprofile" src="../Assest/profile.jpg" alt="" />
                    <div className="center details">
                        <div className="flex">
                            <div>
                                <h5>$100k</h5>
                                <p>Total Earnings</p>
                            </div>
                            <div>
                                <h5>5</h5>
                                <p>Total Jobs</p>
                            </div>
                        </div>
                        <div className="available">
                            <h5>Availabilty</h5>
                            <p>More than 30hrs/week</p>
                        </div>
                        <div className="language">
                            <h5>Languages</h5>
                            <p>English, Hindi</p>
                        </div>
                        <div className="verification">
                            <h5>Verification</h5>
                            <p>Phone verified</p>
                        </div>
                        <div className="education">
                            <h5>Education</h5>
                            <p>Eastern Michigam University <br />
                            Bachalor in Science in Information Technology, COumputer Science </p>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="flex">
                        <div className="right">
                            <div className="blue Feed">
                                <h4><strong>PROFILE</strong></h4>
                            </div>
                            <div className="brief">
                                <h5 className="name">Muskaan</h5>
                                <p className="location">Leesburg, United States,- 5.52am Local time</p>
                                <p>Senior fulll stack developer | Solution Architect | Specializes in Full Stack Development</p>
                            </div>
                            <div className="details">
                                <p className="bio">
                                    MEAN STACK APPLICATION DEVELOPMENT | JAVA/SPRING/HIBERNATE APPLICATION DEVELOPMENT | ANGULAR7 | FRONT END DEVELOPER | BACKEND DEVELOPER | FULL STACK DEVELOPER | WORDPRESS-WOOCOMMERCE | CUSTOM WEB & MOBILE APPLICATIONS DEVELOPMENT
                                    <br /> <br />
                                    I do have 20 years of experience in the Software and IT industries including a long track record of building successful Organizations across the world.
                                    <br /> <br />
                                    I have worked for Adobe.com with an amenable elite of Google experts and have given them top-notch quality deliverables...More   
                                </p>
                            </div>
                            <div className="skills">
                                <h5>Skills</h5>
                                <ul className="tags">
                                    <li>HTML5</li>
                                    <li>CSS</li>
                                    <li>Core Java</li>
                                </ul>
                            </div>
                            <div className="certification">
                                <h5>Certifications</h5>
                                <img src="../Assest/Rectangle 92.png" alt="" />
                                <img src="../Assest/Rectangle 92.png" alt="" /> <br />
                                <a href="#" className="load">Load More..</a>
                            </div>
                            <div className="portfolio">
                                <h5>Portfolio Link</h5>
                                <img src="../Assest/Rectangle 92.png" alt="" />
                                <img src="../Assest/Rectangle 92.png" alt="" /> <br />
                                <a href="#" className="load">Load More..</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <input type="button" value="Contact" />
                        <input type="button" value="Back" />
                    </div>
                </div>
            </div>
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
                        <label for="Lang">Language</label>
                        <h4 id="Lang">English</h4>
                    </li>
                </ul>
            </div>
        </div>
    )
}
