import React from 'react';
import Menu from './Menu';
import { useKeycloak } from '@react-keycloak/web';


function Header() {


    const { keycloak } = useKeycloak()

    return (
        
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">

            <a className="navbar-brand" href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Allianz.svg" width="100" height="30" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
               
                {keycloak.authenticated ? <li className="nav-item active"><a className="nav-link" href="/search">Search</a></li> : null}
                {keycloak.authenticated ? <li className="nav-item"><a className="nav-link" href="/Secured">Manage</a></li> : null}
                
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown link
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li>
                    <Menu name="Mat"/>
                </li>
                </ul>

            </div>
            </nav>
    );
}
/*                 <li>
                   //  <Menu name="Mat"/>
                </li>
                */
               
export default Header;