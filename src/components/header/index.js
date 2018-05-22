import React from 'react';
import {Link} from 'react-router';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={'/'} className="brand-logo">Logo</Link>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <Link to={'/basket'} ><i className="material-icons">shopping_cart</i></Link>
            </div>
        </nav>
    )
}

export default Header
