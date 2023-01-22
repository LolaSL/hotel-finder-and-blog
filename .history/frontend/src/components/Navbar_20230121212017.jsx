import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import './Navbar.scss'


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
    const [t, i18n] = useTranslation();

    const changeLanguage = lng => {
        i18n.changeLanguage(lng);
    };
    return (

        <div className="container-nav fluid">
            <Nav className="navbar navbar-expand-sm"
                aria-label="main navigation"
                fill variant="tabs"
                defaultActiveKey="/artGallery">
                {tabs.map((tab, index) => {
                    return (
                        <Nav.Item key={`nav-tab-${index}`}>
                            <Link className="link" to={tab.route}> {t(`navbar.tabs.${tab.textKey}`)}</Link>
                        </Nav.Item>
                    );
                })}
                <Nav>
                    <div id="nav-button-en">
                        <Button type="button" className="btn btn-secondary fw-bold" onClick={() => changeLanguage('en')}>en</Button>
                    </div>
                    <div id="nav-button-ru">
                        <Button type="button" className="btn btn-secondary fw-bold" onClick={() => changeLanguage('ru')}>ru</Button>
                    </div>
                </Nav>
            </Nav>
        </div>

    );
}

export default withTranslation()(Navbar);