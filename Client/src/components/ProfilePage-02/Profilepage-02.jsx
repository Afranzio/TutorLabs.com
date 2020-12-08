import React, { useState } from 'react'

import './style.css'

export default function Profilepage2() {

    const [position, setPosition] = useState("")
    const [language, setLanguage] = useState("")
    const [certificate, setCertificate] = useState("")
    const [link, setLink] = useState("")
    const [hrs, setHrs] = useState("")
    const [bio, setBio] = useState("")

    return (
        <div>
            <div className="main-container">
                <div className="left-side">
                    <img src="../Assest/profile.jpg" alt="" />
                    <h6 className="upload">upload</h6>
                    <div className="center">
                        <h6>
                            Upload profile for more clients to see your profile
                        </h6>
                    </div>
                </div>
                <div className="right-side">
                    <div className="blue title">
                        <h4><strong>PROFILE</strong></h4>
                    </div>
                    <form action="submit">
                        <div className="flex">
                            <div className="form-left">
                                <div className="form-inputs">
                                    <label for="Position">Current Position</label>
                                    <input type="text" id="Position"
                                        value={position}
                                        onChange={(event) => { setPosition(event) }}
                                        placeholder="Your Position" />
                                </div>
                                <div className="form-inputs">
                                    <label for="Language">Language</label>
                                    <select type="text" id="Language" placeholder="Select Language">
                                        <option value="english" onClick={() => setLanguage(0)} >Select Languages</option>
                                        <option value="english" onClick={() => setLanguage(1)}>English </option>
                                        <option value="tamil" onClick={() => setLanguage(2)}>Tamil </option>
                                        <option value="hindi" onClick={() => setLanguage(3)}>Hindi </option>
                                        <option value="telugu" onClick={() => setLanguage(4)}>Telugu </option>
                                    </select>
                                </div>
                                <div className="form-inputs">
                                    <label for="Certifications">Certifications</label>
                                    <input type="text" id="Certifications"
                                        value={certificate}
                                        onChange={(event) => { setCertificate(event) }}
                                        placeholder="Enter Your Certifications" />
                                </div>
                                <div className="form-inputs">
                                    <label for="Resume">Upload Resume</label>
                                    <input type="text" id="Resume" placeholder="Resume" />
                                    <input type="file" name="Resume" id="Resume" placeholder="Upload Resume" />
                                    <label className="custom-file-upload">
                                        <input type="file" name="Browser" id="browse" />
                                            Upload File
                                            <input type="button" value="Browse" />
                                    </label>
                                    <h6>Note: xls,Pdf,Doc,Docx</h6>
                                </div>
                            </div>
                            <div className="form-right">
                                <div className="form-inputs">
                                    <label for="Link">Portfolio Link</label>
                                    <input type="text" id="Link"
                                        value={link}
                                        onClick={(event) => { setLink(event) }}
                                        placeholder="Link" />
                                </div>
                                <div className="form-inputs">
                                    <label for="Hours/Weeks">Hours/Weeks</label>
                                    <input type="text"
                                        id="Hours/Weeks"
                                        value={hrs}
                                        onClick={(event) => { setHrs(event) }}
                                        placeholder="Hours/Weeks" />
                                </div>
                                <div className="form-inputs">
                                    <label for="Bio">Bio</label>
                                    <textarea name="" id="" cols="30"
                                        value={bio}
                                        onChange={(event) => { setBio(event) }}
                                        rows="7"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <input type="button" value="Save & Next" />
                            <input type="button" value="Cancel" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
