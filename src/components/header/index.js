import React from 'react';
import {Link} from 'react-router';
import ShoppingCart from './cart';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={'/'} className="brand-logo">Logo</Link>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ShoppingCart/>
            </div>
        </nav>
    )
}

export default Header
