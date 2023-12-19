import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu=()=>{

    setVisible(!visible);
  }

  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${visible ? 'show' : ''}`} id="navbarNavAltMarkup">

          <div className="navbar-nav ms-auto mb-2 mb-lg-0">
            <a className="nav-link active" aria-current="page" href="#" >
              About
            </a>
            <a className="nav-link" href="#" >
              Resume
            </a>
            <a className="nav-link" href="#">
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
