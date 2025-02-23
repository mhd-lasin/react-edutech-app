import React from 'react'
import footer from "../../assets/img/footer.png"
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
    const handleClick = ()=>{
        window.scrollTo(0,0)
    }
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-box">
                  <div className="logo">
                    <div className="logo-img">
                       <img src={footer} alt="" /> 
                    </div>
                    <h2>Edutech</h2>
                    </div>  
                    <p>
                       Embrace the future of innovation and technology with our cutting-edge tech business solutions 
                    </p>
                </div>
                <div className="footer-box">
                <h4 className='footer-title'>Company</h4>
                <ul className="footer-links">
                    <li>
                        <Link onClick={handleClick} to={'/courses'}>Our programs</Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} to={'/services'}>Our plan</Link>
                    </li>
                    <li>
                        <a href="#">Become a member</a>
                    </li>
                </ul>
                </div>
                <div className="footer-box">
                <h4 className='footer-title'>Quik links</h4>
                <ul className="footer-links">
                    <li>
                        <Link onClick={handleClick} to={'/about'}>About us</Link>
                    </li>
                    <li>
                        <Link onClick={handleClick} to={'/contact'}>Contact us</Link>
                    </li>
                    <li>
                        <Link to={'/support'}>Support us</Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer