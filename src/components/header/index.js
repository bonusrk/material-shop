import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a  className="brand-logo">Logo</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <a ><i className="material-icons">shopping_cart</i></a>
            </div>
        </nav>
    )
}

export default Header
