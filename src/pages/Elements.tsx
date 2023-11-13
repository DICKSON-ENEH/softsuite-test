import React from 'react'
import Head from '../componenets/Header/Head'
import "./style.scss"
import Body from '../componenets/Body/Body'

const Elements = () => {
  return (
 <div className='element-container'>
    <div className='wrapper'>
    <Head/>

    <Body/>

    </div>
    
  
 </div>
  )
}

export default Elements