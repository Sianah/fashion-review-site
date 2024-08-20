import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>
                <Link to="/" style={linkStyle}>Fashion Review Hub</Link>
            </h1>
        </header>
    );
};

const headerStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
};

const titleStyle = {
    margin: '0',
    fontFamily: '"Roboto", sans-serif',
    fontSize: '2.5rem',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
};

export default Header;
