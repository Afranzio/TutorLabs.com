import React, { useState, useEffect } from 'react'
import { createProfile } from '../Actions/service'
import {countryList} from '../Actions/service'
import {stateList} from '../Actions/service'
import {profilePic} from '../components/Assest/profile.jpg'


import './style.css'

export default function Profilepage() {

    const [countrySt, setCountryst] = useState("")
    const [stateSt, setStatest] = useState("")
    const [fName, setFname] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")
    const [skill, setSkill] = useState("")
    const [lName, setLname] = useState("")
    const [state, setState] = useState("")
    const [skype, setSkype] = useState("")
    const [exp, setExp] = useState("")
    const [position, setPosition] = useState("")
    const [language, setLanguage] = useState("")
    const [certificate, setCertificate] = useState("")
    const [link, setLink] = useState("")
    const [hrs, setHrs] = useState("")
    const [bio, setBio] = useState("")

    useEffect(() => {
        const cpromList = countryList();
        const spromList = stateList(1);
        const cList =  cpromList.then(res => console.log(res)); 
        const sList = spromList.then(res => console.log(res));
        return () => {
            setCountryst(cList)
            setStatest(sList)
        }
    }, [])

    const profile = {
        "id": 37,
        "first_name": fName,
        "last_name": lName,
        "country_id": country,
        "state_id": state,
        "mobile_number": phone,
        "skype_id": skype,
        "skills": {
            "userId": 11,
            "skills": [skill]
        },
        "experience": exp + "Years",
        "current_position": position,
        "portfolio_link": link,
        "hours_per_week": hrs,
        "resume_url": "File",
        "bio": bio
    }

    const next = () => {
        return createProfile(profile)
    }

    const countrydata = () => {

    }

    return (
        <div>
            <div className="main-container">
                <div className="left-side">
                    <img src={profilePic} alt="" />
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
                                    <label>Firstname</label>
                                    <input type="text" id="fn"
                                        value={fName}
                                        onChange={(event) => { setFname(event.target.value) }}
                                        placeholder="Firstname" />
                                </div>
                                <div className="form-inputs">
                                    <label>Country</label>
                                    <input type="text" id="cn"
                                        value={country}
                                        onChange={(event) => { setCountry(event.target.value) }}
                                        placeholder="Country" />
                                </div>
                                <div className="form-inputs">
                                    <label>Country</label>
                                    <select type="text" id="country" placeholder="Select Language" onChange={(event)=>{setCountry(event.target.value)}}>
                                        {/* {countrySt.map(a => <option key={a.id} value={a.id}>{a.country}</option>)} */}
                                        {/* {stateSt.map(a => <option key={a.id} value={a.id}>{a.country}</option>)} */}
                                    </select>
                                </div>
                                <div className="form-inputs">
                                    <label>Phone</label>
                                    <input type="text" id="ph"
                                        value={phone}
                                        onChange={(event) => { setPhone(event.target.value) }}
                                        placeholder="Phone" />
                                </div>
                                <div className="form-inputs">
                                    <label>Skills</label>
                                    <input type="text" id="skil"
                                        value={skill}
                                        onChange={(event) => { setSkill(event.target.value) }}
                                        placeholder="Skype-ID" />
                                </div>
                            </div>
                            <div className="form-right">
                                <div className="form-inputs">
                                    <label>Lastname</label>
                                    <input type="text" id="ln"
                                        value={lName}
                                        onChange={(event) => { setLname(event.target.value) }}
                                        placeholder="Lastname" />
                                </div>
                                <div className="form-inputs">
                                    <label>State</label>
                                    <input type="text" id="st"
                                        value={state}
                                        onChange={(event) => { setState(event.target.value) }}
                                        placeholder="Select State" />
                                </div>
                                <div className="form-inputs">
                                    <label>Skype-ID</label>
                                    <input type="text" id="sky"
                                        value={skype}
                                        onChange={(event) => { setSkype(event.target.value) }}
                                        placeholder="Skype-ID" />
                                </div>
                                <div className="form-inputs">
                                    <label>Year of Experience</label>
                                    <input type="text" id="sky"
                                        value={exp}
                                        onChange={(event) => { setExp(event.target.value) }}
                                        placeholder="Enter in Number" />
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="form-left">
                                <div className="form-inputs">
                                    <label>Current Position</label>
                                    <input type="text" id="Position" 
                                    onChange={(event)=>{setPosition(event.target.value)}}
                                    placeholder="Your Position" />
                                </div>
                                <div className="form-inputs">
                                    <label>Language</label>
                                    <select type="text" id="Language" placeholder="Select Language" onChange={(event)=>{setLanguage(event.target.value)}}>
                                        <option value="none" >Select Languages</option>
                                        <option value="english" >English</option>
                                        <option value="tamil" >Tamil</option>
                                        <option value="hindi" >Hindi</option>
                                        <option value="telugu" >Telugu</option>
                                    </select>
                                </div>
                                <div className="form-inputs">
                                    <label>Certifications</label>
                                    <input type="text" id="Certifications" 
                                    value={certificate}
                                    onChange={(event)=>{setCertificate(event.target.value)}}
                                    placeholder="Enter Your Certifications" />
                                </div>
                                <div className="form-inputs">
                                    <label>Upload Resume</label>
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
                                    <label>Portfolio Link</label>
                                    <input type="text" id="Link" 
                                    value={link}
                                    onChange={(event)=>{setLink(event.target.value)}}
                                    placeholder="Link" />
                                </div>
                                <div className="form-inputs">
                                    <label>Hours/Weeks</label>
                                    <input type="text" id="Hours/Weeks" 
                                    value={hrs}
                                    onChange={(event)=>{setHrs(event.target.value)}}
                                    placeholder="Hours/Weeks" />
                                </div>
                                <div className="form-inputs">
                                    <label>Bio</label>
                                    <textarea name="" id="" cols="30" 
                                    onChange={(event)=>{setBio(event.target.value)}}
                                    rows="7" />
                                </div>
                            </div>  
                        </div>
                       <div className="buttons">
                            <input type="button" onClick={next} value="Submit" />
                            <input type="button" onClick={countrydata} value="Cancel" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
