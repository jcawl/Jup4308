import React from 'react'
import './style/nav.css'
import surfer from '../img/surfer.png'
import About from './About'
import Activites from './Activities'
import Restaurants from './Restaurants'

function Nav() {
    return (
        <header className="main-header">
            <div className="container">
                <h1 className="mh-logo">
                    <img src={surfer} alt="4308" />
                </h1>
                <nav className="main-nav">
                    <ul className="main-nav-list">
                        <li>
                            <About />
                        </li>
                        <li>
                            <Activites />
                        </li>
                        <li>
                            <Restaurants />
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/place/4308+Fairway+Dr+N,+Jupiter,+FL+33477/@26.9415143,-80.0804956,15.5z/data=!4m5!3m4!1s0x88df29955b681d07:0x7cd613b65102aad2!8m2!3d26.939979!4d-80.074842" target="_blank" rel="noopener noreferrer">
                                <ul className='link'>Map</ul>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav
