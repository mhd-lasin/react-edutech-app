import React from 'react'
import "./Community.css"
import tc from "../../assets/img/tc.png"
const Community = () => {
    const handleClick = ()=>{
        window.open('https://www.whatsapp.com/', '_blank')
    }
  return (
    <div className='container'>
        <div className="start-wrapper">
            <div className="start-img">
                <img src={tc} alt="" />
            </div>
            <div className="start-content">
                <h2 className="section-title">Join our free tech commumunity</h2>
                <p>Unlock the power of knowledge and innovation by joining our vibrant and free whatsapp tech community</p>
                <button onClick={handleClick} className="register-btn">Join now</button>
            </div>
        </div>
    </div>
  )
}

export default Community