import React, {useContext} from 'react';
import { Link } from 'react-router';
import languageContext from './../context/languageContext';

export default function Header() {
  const {language,isRTL,changeLanguage} = useContext(languageContext)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ALiBaba
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li>
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                aria-current="page"
                to="/shopping-cart"
              >
                Cart
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>

            <li Name="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Languages
              </a>
                <ul className="dropdown-menu" style={isRTL?{left:1200}:{left:260 }}>
                  <li>
                     <button value={'en'} onClick={(e) => changeLanguage(e.target.value)} className="dropdown-item">en </button>
                  </li>
                  <li>
                     <button value={'ar'} onClick={(e) => changeLanguage(e.target.value)} className="dropdown-item" >ar </button>
                  </li>
              </ul> 
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
