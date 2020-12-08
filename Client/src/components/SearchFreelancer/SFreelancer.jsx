import React, {useState, useEffect} from 'react'
import '../style.css'
import './style.css'

import List from './SearchFreelancer/list'

import {search, getFreelancer} from '../../Actions/service'

export default function SFreelancer({changer}) {
    const [searchs, setSearchs] = useState('');
    const [profile, setProfile] = useState([]);

    function get(){
        var freelancers = search(searchs)
        freelancers.then(function(value) {
            setProfile(value);
            console.log(profile)
            // console.log(profile.map(each=>{return each.userId}))
            let a = profile.map((one=>{return getFreelancer(one.userId)}))
            console.log(a)
        })
    }

    return (
        <div className='main'>
            <div className="search flex">
                <h4>Get Your Work Done!!</h4>
                <div className="input">
                    <input type="text" placeholder="Search for Experts.." onChange={(e)=>{setSearchs(e.target.value)}} />
                    <input type="button" onClick={get} value="Search Freelancer" />
                    {/* <input type="button" value="Filter" /> */}
                </div>
            </div>
            <div className='main' >
            <div className="main-container">
                <div className="flex">
                    <div className="right-side">
                        <h6 className="myFeed">My Feeds</h6>
                        <div className="flexs">
                            {/* {profile.map((each)=><List data={each} />)} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
