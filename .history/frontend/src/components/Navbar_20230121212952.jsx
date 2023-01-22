import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';


const tabs = [
    {
        route: '/',
        textKey: 'home'
    },
    {
        route: '/tourist_tips',
        textKey: 'tips'
    },
    {
        route: '/signIn',
        textKey: 'signin'
    }


];

const Navbar = () => {
   
    return (

        <div className="container-nav fluid">
            <Nav className="navbar navbar-expand-sm"
                aria-label="main navigation"
                fill variant="tabs"
                defaultActiveKey="/home">
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