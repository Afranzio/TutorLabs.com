import React from 'react'
import './style.css'
import '../../style.css'

import profile from '../../Assest/profile.jpg'
import Star from '../../Assest/Vector.svg'

import Modalpop from '../modal'


export default function List(data) {
    return (
        <div className="list-1">
            <div className="flex">
                <div className="img">
                    <img src={profile} alt="" />
                </div>
                <div className="rig">
                    <h6>{data.name}</h6>
                    <p>{data.pro}</p>
                    <div className="flex">
                        <h6>Skills:</h6>
                        <span>
                            <ul className="flex tags">
                                {data.skills.map(each=><li>{each}</li>)}
                            </ul>
                        </span>
                    </div>
                    <p className="bio">{data.Bio}</p>
                    <div className="flex">
                        <h6 className="rate">Rating</h6>
                        <div className="stars">
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                            <img src={Star} alt="" />
                        </div>
                        <div className="flex bottom">
                            <h6>${data.Earned}</h6><span>Earned</span>
                            <p>Australia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



