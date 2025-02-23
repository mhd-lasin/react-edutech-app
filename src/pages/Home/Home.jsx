import React from 'react'
import "./Home.css"
import meta from "../../assets/img/meta.jpeg"
import { AiOutlineWhatsApp } from "react-icons/ai";
import Courses from '../Courses/Courses';
import Community from '../Community/Community';
import Plans from '../Plans/Plans';
const Home = () => {
    const handleClick = ()=>{
        window.open('https://react.dev/','_blank')
    }
  return (
    <>
    <section>
        <div className="container">
            <div className="home-container">
                <div className="home-content">
                <h2 className="section-title">Learn Everything For Free!!</h2>
                <p>Master trending technologies with edutech, invest your time and return skills</p>
                <div className="home-btns">
                    <button onClick={handleClick} className='register-btn'>Get started</button>
                    <button onClick={handleClick} className='register-btn'>Watch now</button>
                </div>
                </div>
                <div className="home-img">
                    <div className="home-image-wrapper">
                        <div className="box-01">
                            <div className="box-image">
                                <img src={meta} alt="" />
                            </div>
                        </div>
                        <div className="whatsapp-container">
                            <h5>500+ students</h5>
                            <AiOutlineWhatsApp color='green' />
                        </div>
                        <div className="support">
                            <h5>Active support</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Courses />
    <Community />
    <Plans />
    </>
  )
}

export default Home