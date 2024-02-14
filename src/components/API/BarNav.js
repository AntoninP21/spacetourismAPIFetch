import React from 'react'
import "./styles/BarNav.css"
function BarNav() {
  return (
    <div className='bodyBarNav'>
        <nav className='header'>
        <div className='box_logo'>
            <a href='/'>
                <img src={require('./styles/images/Logo.png')} alt='Logo' />
            </a>
    </div>
    <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                <a href='/'><li>00 HOME</li></a>
                <a href='/'><li>01 DESTINATION</li></a>
                <a href='/'><li>02 CREW</li></a>
                <a href='/'><li>03 TECHNOLOGY</li></a>
              </ul>
            </div>
        </nav>
    <div className='decoration_header'></div>
    <div className='background_header'>
        <div className='container_header'>
                <a aria-label="Accueil" href='/'>
                    <div className='box_nav'>
                       <span className='bold'>00</span> HOME
                    </div>               
                </a>  
                    <a aria-label="Destination" href='/'>
                    <div className='box_nav'>
                        <span className='bold'>01</span> DESTINATION
                    </div>    
                    </a>
                <a aria-label="Equipage" href='/'>
                    <div className='box_nav'>
                        <span className='bold'>02</span> CREW
                    </div>    
                </a>       
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