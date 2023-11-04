import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Shopping Cart</Link>

                <ul className="right">
                    <li><Link to="/">Home Page</Link></li>
                    <li><Link to="/cart">Cart Page</Link></li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar;