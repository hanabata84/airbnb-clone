import React from 'react'
import airbnbLogo from '../assets/airbnb.svg'

function Navbar() {
    return (
        <nav>
            <img src={airbnbLogo} alt="airbnb-logo" />
        </nav>
    )
}

export default Navbar