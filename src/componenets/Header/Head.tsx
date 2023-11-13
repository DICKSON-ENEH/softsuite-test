import React from 'react'
import "./head.scss"
import {AiFillHome} from "react-icons/ai"
import { FaChevronDown } from 'react-icons/fa'
import { BiSearchAlt2 } from 'react-icons/bi'
import {MdNotifications} from "react-icons/md"
import avatar from "../assets/images/avatar.png"


const Head = () => {
  return (
    <div className='head-container'>
       <div className='header-wrapper'>
     <div className='left-nav-holder'>
     <div className='first-top-nav'>
            <div>
                <AiFillHome color='#2D416F'/>

            </div>
            <div>
                <div className='inner-text'>
                    Change organization
                </div>
                <div className='prosper-soft'>
                    ProperSoft Limited
                </div>
            </div>
            <div >
                <FaChevronDown fontSize={12}/>
            </div>

           
        </div>
        <div className='second-top-nav'>
            <input placeholder='Search for anything'/>
            <div className='icon'>
                <BiSearchAlt2 color='#fff'/>
            </div>
        </div>
     </div>
        <div className='third-top-nav'>
            <div>
                <MdNotifications/>
            </div>
            <div className='third-inner-nav'>
            <div>
                <img className='avatar' src={avatar} alt="avatar"/>
            </div>
            <div>
                <div className='name'>
                    Dickson Eneh
                </div>
                <div className='role'>
                    Payroll Manager
                </div>
            </div>
            </div>
         
        </div>
       </div>
    </div>
  )
}

export default Head