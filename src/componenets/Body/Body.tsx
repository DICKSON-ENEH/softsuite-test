import React from 'react'
import "./style.scss"
import { FaChevronRight } from 'react-icons/fa'
import { BiSearchAlt2 } from 'react-icons/bi'
import filter from "../assets/images/filter.png"

const Body = () => {
  return (
    <div className='body-component'>
        <div className='pathnames'>
            <span>Payroll Management</span>
            <span className='icon'><FaChevronRight/></span>
            <span>Element Setup</span>
            <span className='icon'><FaChevronRight/></span>
            <span style={{
                color:"#2D416F"
            }}>Elements</span>
        </div>
        <div className='box'>
<div className='topic'>
    Elements
</div>
<div className='quick-access'>
<div className='input-hold'>
<input placeholder='Search for anything'/>
            <div className='icon'>
                <BiSearchAlt2 color='#fff'/>
            </div>
            <div className='filter'>
                <img src={filter} alt=""/>
            </div>
</div>
</div>
        </div>
    </div>
  )
}

export default Body