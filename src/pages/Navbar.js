import React from 'react';

import "./styles/Navbar.css"
import logo from '../components/styles/Navbar.css';


class Navbar extends React.Component {
    render() {
         
        
        return (
        <div className="Navbar">
            <a href="/"></a>
                <img src={logo} alt="Logo" />
                <span className="font-weight-light">Platzi</span>
                <span className="font-weight-bold">Conf</span>


        </div>
        );
    }
}

export default Navbar;