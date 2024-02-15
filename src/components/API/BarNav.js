import React from 'react'
import "./styles/BarNav.css"
import { Link } from 'react-router-dom'
function BarNav() {
  return (
    <div className='bodyBarNav'>
        <nav className='header'>
        <div className='box_logo'>
            <Link to='/'>
                <img src={require('./styles/images/Logo.png')} alt='Logo' />
            </Link>
    </div>
    <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <Link to='/'><li>00 HOME</li></Link>
                <Link to='/destination'><li>01 DESTINATION</li></Link>
                <Link to='/crew'><li>02 CREW</li></Link>
                <a href='/'><li>03 TECHNOLOGY</li></a>
              </ul>
            </div>
        </nav>
    <div className='decoration_header'></div>
    <div className='background_header'>
        <div className='container_header'>
                <Link to ='/'>
                    <div className='box_nav'>
                       <span className='bold'>00</span> HOME
                    </div>               
                </Link>  
                <Link to='/destination'>
                    <div className='box_nav'>
                    <span className='bold'>01</span> DESTINATION
                    </div>    
                </Link>
                <Link to='/crew'>
                    <div className='box_nav'>
                        <span className='bold'>02</span> CREW
                    </div>    
                </Link>       
                <a aria-label="Technologie" href='/'>
                    <div className='box_nav'>    
                        <span className='bold'>03</span> TECHNOLOGY
                    </div>    
                </a>     
        </div>                
    </div>   
</nav>
    </div>
  )
}

export default BarNav