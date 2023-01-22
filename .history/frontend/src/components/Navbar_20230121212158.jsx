import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


const tabs = [
    {
        route: '/',
        textKey: 'artGallery'
    },
    {
        route: '/collection',
        textKey: 'collection'
    },
    {
        route: '/events',
        textKey: 'events'
    },
    {
        route: '/booking',
        textKey: 'booking'
    },
    {
        route: '/about',
        textKey: 'about'
    },

];

const Navbar = () => {
   
    return (

        <div className="container-nav fluid">
            <Nav className="navbar navbar-expand-sm"
                aria-label="main navigation"
                fill variant="tabs"
                defaultActiveKey="/artGallery">
                {tabs.map((tab, index) => {
                    return (
                        <Nav.Item key={`nav-tab-${index}`}>
                            <Link className="link" to={tab.route}>${tab.textKey}`</Link>
                        </Nav.Item>
                    );
                })}
        
            </Nav>
        </div>

    );
}

export default Navbar;